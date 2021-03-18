import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ProductProvider } from './contextAPI';
import * as serviceworker from './serviceworker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ProductProvider>
    <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </ProductProvider>,
  document.getElementById('root')
);

serviceworker.unregister();