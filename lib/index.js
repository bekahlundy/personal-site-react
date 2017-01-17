import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.js';

require('./css/reset.css');
require('./css/index.scss');

ReactDOM.render( <Application />, document.querySelector('.application'))
