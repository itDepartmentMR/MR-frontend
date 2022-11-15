import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/sass.scss';
import Router from './routes/Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
