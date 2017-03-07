import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return(
    <div className='center-nav'>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/work'>
            <li>Work</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Nav;
