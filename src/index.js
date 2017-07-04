import React from 'react';
import ReactDOM from 'react-dom';



import Gardian from './js/Gardian';
import registerServiceWorker from './registerServiceWorker';
import './scss/index.css';



ReactDOM.render(<Gardian />, document.getElementById('root'));
registerServiceWorker();
