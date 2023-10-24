import axios from 'axios'
import { expect } from 'chai';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('UserController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/users/count`);
      expect(data).to.have.all.keys('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/users`);
      expect(data).to.be.an('array')
      expect(data[0]).to.include.all.keys('_id', 'name')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/users/653009a3f87f516d086b1efd`);
      expect(data).to.include.all.keys('_id', 'name')
    });
  });
});
