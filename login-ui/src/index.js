import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import App from './App';
import AppTheme from './shared-theme/AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppTheme>  {}
    <CssBaseline />  {}
    <App />
  </AppTheme>
);
