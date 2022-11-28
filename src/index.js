import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/sass.scss';
import Router from './routes/Routes';
import { AuthProvider } from './app/AutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <Router/>
    </AuthProvider>
);
