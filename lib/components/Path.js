import React from 'react';
import {Route, Router, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import App from './App';
import Projects from './Projects';
import Project from './Project';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import Home from './Home';

const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        {/* <IndexRedirect to='/home'/>
         <Route path='/home' component={Home}> */}
         <Route path='/work' component={Projects}/>
         <Route path='/about' component={About}/>
         <Route path='/contact' component={Contact}/>
          <Route path=':title' component={ProjectPage}/> */}
         </Route>
      {/* </Route> */}
    </Router>
  );
}

export default Path;
