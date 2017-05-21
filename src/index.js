import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';
import App from './App';

fetch('/api')
    .then(respons => respons.json())
    .then(json => console.log(json));

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root')
);
