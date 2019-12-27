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

  getEventos = (params) => this.api.get('events', { params });

  getEvento = (id, params) => this.api.get(`events/${id}`, { params });

  createEvent = (data) => this.api.post('events', data);

  // Doadora

  createDoadora = (data) => this.api.post('donor', data);
}

export default new ApiService();
