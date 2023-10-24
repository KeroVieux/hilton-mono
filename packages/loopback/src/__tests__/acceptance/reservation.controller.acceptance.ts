import axios from 'axios'
import { expect } from 'chai';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('ReservationController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/reservations/count`);
      expect(data).to.have.all.keys('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array, each object should include keys: _id, name', async () => {
      const { data } = await $axios.get(`/reservations`);
      expect(data).to.be.an('array')
      expect(data[0]).to.include.all.keys('_id', 'name')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id, name', async () => {
      const { data } = await $axios.get(`/reservations/653030707410fe22bcbb8034`);
      expect(data).to.include.all.keys('_id', 'name')
    });
  });
});
