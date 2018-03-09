import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import './App.css'

import Redirects from './router'

ReactDOM.render(<Redirects />, document.getElementById('root'));
registerServiceWorker();