import React from 'react';
import ReactDOM from 'react-dom';



// import Gardian from './js/Gardian';

import LoginPage from './js/containers/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import './scss/index.css';



ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
