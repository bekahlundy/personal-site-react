import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Body from './Body';

export default class Application extends Component {
  render() {
    return(
      <div>
        <h2>Bekah Lundy</h2>
        <Nav />
        <Body />
      </div>
    )
  }
}
