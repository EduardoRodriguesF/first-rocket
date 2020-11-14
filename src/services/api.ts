import axios from 'axios';

const api = axios.create({
  baseURL: 'https://first-rocket.herokuapp.com',
});

export default api;
