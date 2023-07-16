import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import { App } from './App';
import { Provider } from './providers/Provider';

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
