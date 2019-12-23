/* eslint-disable no-param-reassign */

import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://huntington-api.herokuapp.com',
    });
  }

  setToken = (token) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  removeToken = () => {
    delete this.api.defaults.headers.common.Authorization;
  }

  login = (data) => this.api.post('/auth/local', data)

  signInWithToken = (data) => this.api.post('/auth/access-token', data)

  getPreCadastro = (id, search) => this.api.get('events');

  getEventos = (id, search) => this.api.get('events');

  createEvent = (data) => this.api.post('events', data);
}

export default new ApiService();
