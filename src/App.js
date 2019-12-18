import './config/ReactotronConfig';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { store, persistor } from './store';
import Routes from './routes';
import Global from './styles/global';
import AuthProvider from '~/components/AuthProvider';

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
};

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <SnackbarProvider maxSnack={4} anchorOrigin={snackbarProviderOptions}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </ThemeProvider>
          </AuthProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
);
}

export default App;
