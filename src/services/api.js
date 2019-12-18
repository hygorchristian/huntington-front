import axios from 'axios';

const api = axios.create({
  baseURL: 'https://huntington-api.herokuapp.com/',
});

export default api;
