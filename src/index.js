import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { ArticulosContextProvider } from './contexts/ArticulosContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ArticulosContextProvider>
        <App />
      </ArticulosContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

