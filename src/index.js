import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './scss/index.css';

import Routing from './router';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
