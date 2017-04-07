import React from 'react'
import Landing from './Landing'
import About from './About'
import Projects from './Projects'

const Body = () => {
  return(
    <div>
    <Landing />
      <div className='space'></div>
    <About />
        <div className='space'></div>
        <div className="isosceles"></div>
    <Projects />
        <div className="wrapper">
          <div className="triangle-down-yellow">
            <div></div>
          </div>
        </div>
        <div className='four' id='contact'>
          <div className='four-title'>Contact Me</div>
        </div>
      </div>
    )
  }

  export default Body;
