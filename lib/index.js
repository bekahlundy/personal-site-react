import React from 'react';
import { render } from 'react-dom';
import Path from './components/Path';

require('./styles/reset.css');
require('./styles/index.scss');

render( <Path />, document.querySelector('.application'))
