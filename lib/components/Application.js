import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Work from './Work';

export default class Application extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Work />
      </div>
    )
  }
}
