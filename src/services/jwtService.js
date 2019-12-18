import axios from 'axios';
import jwtDecode from 'jwt-decode';
import EventEmitter from '~/utils/EventEmitter';

class jwtService extends EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
    console.tron.log('JWT SERVICE iniciado');
  }

  setInterceptors = () => {
    axios.interceptors.response.use((response) => response, (err) => new Promise((resolve, reject) => {
      if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
        // se receber uma mensagem de Não Autorizado deve deslogar o usuário

        this.emit('onAutoLogout', 'Token de acesso inválido');
        this.setSession(null);
      }
      throw err;
      }));
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'Token de acesso expirado');
    }
  };

  createUser = (data) => new Promise((resolve, reject) => {
    axios.post('/api/auth/register', data)
      .then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
  });

  loginWithEmailAndPassword = (email, password) => new Promise((resolve, reject) => {
    axios.post('/auth/local', {
      data: {
        identifier: email,
        password
      }
    }).then((response) => {
      if (response.data.user) {
        this.setSession(response.data.jwt);
        resolve(response.data.user);
      } else {
        reject(response.data.error);
      }
    });
  });

  signInWithToken = () => new Promise((resolve, reject) => {
    axios.get('/auth/access-token', {
      data: {
        access_token: this.getAccessToken()
      }
    })
      .then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
  });

  updateUserData = (user) => axios.post('/api/auth/user/update', {
    user
  });

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('o token de acesso foi expirado');
      return false;
    }
      return true;
  };

  getAccessToken = () => window.localStorage.getItem('jwt_access_token');
}

const instance = new jwtService();

export default instance;
