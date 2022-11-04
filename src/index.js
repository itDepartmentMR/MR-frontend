import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/sass.scss';
import Router from './routes/Routes';
import { Provider } from 'react-redux';
import {store} from './app/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>
);
