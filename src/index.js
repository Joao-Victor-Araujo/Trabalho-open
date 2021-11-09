import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './components/styles/generic/elements/Base';
import Reset from './components/styles/generic/Reset';


ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
