import './config/ReactotronConfig';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Routes from './routes';
import Global from './styles/global';

const snackbarProviderOptions = {
  vertical: 'top',
  horizontal: 'right',
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <SnackbarProvider maxSnack={4} anchorOrigin={snackbarProviderOptions}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
);
}

export default App;
