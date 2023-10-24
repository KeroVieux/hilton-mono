import axios from 'axios'
import { expect } from 'chai';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('RestaurantController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/restaurants/count`);
      expect(data).to.have.all.keys('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/restaurants`);
      expect(data).to.be.an('array')
      expect(data[0]).to.include.all.keys('_id', 'name')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/restaurants/652fd7fc164584255d3a01a5`);
      expect(data).to.include.all.keys('_id', 'name')
    });
  });
});
