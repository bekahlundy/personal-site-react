import React from 'react';
import { render } from 'react-dom';
import Body from './components/Body';

require('./styles/reset.css');
require('./styles/index.scss');

render( <Body />, document.querySelector('.application'))
