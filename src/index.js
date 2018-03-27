import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import './styles/css/App.css'

import Redirects from './router'

ReactDOM.render(<Redirects />, document.getElementById('root'));
registerServiceWorker();
