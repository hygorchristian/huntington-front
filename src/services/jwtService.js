import jwtDecode from 'jwt-decode';
import EventEmitter from '~/utils/EventEmitter';
import Api from '~/services/api';

class jwtService extends EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    // api.interceptors.response.use((response) => response, (err) => new Promise((resolve, reject) => {
    //   if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
    //     // se receber uma mensagem de Não Autorizado deve deslogar o usuário
    //
    //     this.emit('onAutoLogout', 'Token de acesso inválido');
    //     this.setSession(null);
    //   }
    //   throw err;
    //   }));
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

  // createUser = (data) => new Promise((resolve, reject) => {
  //   Api.register(data)
  //     .then((response) => {
  //       if (response.data.user) {
  //         this.setSession(response.data.access_token);
  //         resolve(response.data.user);
  //       } else {
  //         reject(response.data.error);
  //       }
  //     });
  // });

  login = (email, password) => new Promise((resolve, reject) => {
    Api.login({
      identifier: email,
      password
    }).then((response) => {
      if (response.data.user) {
        this.setSession(response.data.jwt);
        resolve(response.data.user);
      } else {
        reject(response.data.error);
      }
    }).catch((e) => {
      reject(e);
    });
  });

  signInWithToken = () => new Promise((resolve, reject) => {
    Api.signInWithToken({
      data: {
        access_token: this.getAccessToken()
      }
    }).then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
  });

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      Api.setToken(access_token);
    } else {
      localStorage.removeItem('jwt_access_token');
      Api.removeToken();
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

  setAuth = () => {
    const token = this.getAccessToken();
    if (this.isAuthTokenValid(token)) {
      Api.setToken(token);
    } else {
      console.tron.log('invalid token');
    }
  };

  getAccessToken = () => window.localStorage.getItem('jwt_access_token');
}

const instance = new jwtService();

export default instance;
