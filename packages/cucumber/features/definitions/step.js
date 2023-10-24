const { Given, When, Then, AfterAll } = require('@cucumber/cucumber')
const { Builder, By, Capabilities, Key } = require('selenium-webdriver')
const { expect } = require('chai')
const _ = require('lodash')
require('dotenv').config()
require('chromedriver')
const sleep = async (ms) => {
	await new Promise(r => setTimeout(r, ms))
}
// driver setup
const capabilities = Capabilities.chrome()
capabilities.set('chromeOptions', { w3c: false })
const driver = new Builder().withCapabilities(capabilities).build()
const webUrl = process.env.WEB_URL
Given('I am on the home page', async () => {
	await driver.manage().setTimeouts({ implicit: 2000 })
	await driver.get(webUrl)
})

Then('the page title should be {string}', {timeout: 60 * 1000}, async (titleText) => {
	const title = await driver.getTitle()
	expect(title).to.equal(titleText)
})
When('I submit a reservation with a name {string} and a phone number {string}', async (name, phone) => {
	await sleep(1000)
	const nameInput = await driver.findElement(By.id('name'))
	const phoneInput = await driver.findElement(By.id('phone'))
	await nameInput.clear()
	await phoneInput.clear()
	await nameInput.sendKeys(name)
	await phoneInput.sendKeys(phone)
	await driver.findElement(By.id('submitReservation')).click()
})
Then('The page should navigate to the record one', async () => {
	await sleep(2000)
	const currentUrl = await driver.getCurrentUrl()
	expect(currentUrl).to.include('records')
})
Then('The list has only one record', async () => {
	const recordEl = await driver.findElements(By.className('el-card'))
	expect(recordEl.length).to.equal(1)
})
Given('I back to the reservation page', async () => {
	await driver.navigate().to(webUrl)
})
Given('I navigate to the record page', async () => {
	await driver.findElement(By.xpath('//*[@id="app"]/div/header/ul/li[2]')).click()
	await sleep(1000)
})
Then('The list has one record', async () => {
	const recordEl = await driver.findElements(By.className('el-card'))
	expect(recordEl.length).to.equal(1)
})
When('I click the update button', async () => {
	await driver.findElement(By.className('update-btn')).click()
})
Then('The update dialog should display', async () => {
	await sleep(1000)
	const updateDialogDisplay = await driver.findElement(By.id('updateDialog')).isDisplayed()
	expect(updateDialogDisplay).to.be.true
})
When('I update the remark with message {string}', async (msg) => {
	const remarkInputEl = driver.findElement(By.id('remark'))
	await remarkInputEl.clear()
	await remarkInputEl.sendKeys(msg)
	await driver.findElement(By.xpath('//*[@id="submitReservation"]')).click()
	await sleep(1000)
})
Then('The record will show a remark with {string}', async (msg) => {
	const remarkText = await driver.findElement(By.id('remarkText')).getText()
	expect(remarkText).to.equal(msg)
})
AfterAll(async () => {
	await driver.quit()
})
