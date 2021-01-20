import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { ArticulosContextProvider } from './contexts/ArticulosContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ArticulosContextProvider>
      <App />
    </ArticulosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

