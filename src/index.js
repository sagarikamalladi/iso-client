import React from 'react';
import ReactDOM from 'react-dom';
//import App from './component';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Pages from './component/Router'

ReactDOM.render(
  <Pages />,
  document.getElementById('root')
);
registerServiceWorker();
