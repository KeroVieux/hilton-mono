import axios from 'axios'
import { expect } from 'chai';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('TableController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/tables/count`);
      expect(data).to.have.all.keys('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/tables`);
      expect(data).to.be.an('array')
      expect(data[0]).to.include.all.keys('_id', 'name')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/tables/652fd99e1cd6122857a42d7b`);
      expect(data).to.include.all.keys('_id', 'name')
    });
  });
});
