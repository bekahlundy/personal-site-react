import React from 'react';
import Project from './Project';

const Work = () => {
  return(
    <div>
      <div className='space'></div>
      <h2>Projects</h2>
      <Project
        className='log-in'
        src='/lib/images/weathrly.svg'
        alt='rain cloud image'
        title='weathrly'/>
      <Project
        className='log-in'
        src='/lib/images/shootthebreeze.svg'
        alt='message icon'
        title='shoot the breeze'/>
      <Project
        className='log-in'
        src='/lib/images/2dobox.svg'
        alt='check box in a circle'
        title='2doBox'/>
      <Project
        className='log-in'
        src='/lib/images/budget.svg'
        alt='money bag'
        title='Excellent Budgeting'/>
      <h2>Graphic Design</h2>
      <Project
        className='log-in'
        src='/lib/images/budget.svg'
        alt='alt text working'
        title='Excellent Budgeting'/>
    </div>
  )
}

export default Work;
