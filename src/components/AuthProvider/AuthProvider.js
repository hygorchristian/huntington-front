import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtService from '~/services/jwtService';
import { AuthActions } from '~/store/ducks/auth';

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const jwtCheck = () => {
    jwtService.on('onAutoLogin', () => {
      jwtService.signInWithToken()
        .then((user) => {
          dispatch(AuthActions.authLoadSuccess(user));
        })
        .catch((error) => {
          dispatch(AuthActions.authLoadFailure(error));
          dispatch(AuthActions.logout());
        });
    });

    jwtService.on('onAutoLogout', (message) => {
      if (message) {
        dispatch(AuthActions.authLoadFailure(message));
      }
      dispatch(AuthActions.logout());
    });

    jwtService.init();
  };

  useEffect(() => {
    jwtCheck();
  }, []);

  return children;
}

export default AuthProvider;
