import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/routes';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './redux/navbars';
import authReducer from './redux/auth';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);