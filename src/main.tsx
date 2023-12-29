import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './pages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);

