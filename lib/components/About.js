import React from 'react'
import TriangleDown from './TriangleDown';
import AboutMeIcon from './AboutMeIcon';

const About = () => {
  return(
    <div>
      <TriangleDown />
      <div className='about-container' id='about'>
        <h1 className='title'>about me</h1>
        <div className='icons-container'>
          <AboutMeIcon src='/lib/images/developer.svg' name='developer'/>
          <AboutMeIcon src='./lib/images/designer.svg' name='designer'/>
          <AboutMeIcon src='./lib/images/creator.svg' name='creator'/>
        </div>
        <div className='about-p-container'>
          <p className='about-p-bold'>It’sMe is a creative psd portfolio template which focused on designer, developer, freelancer, photographer, architects, artists and many more individual who want to showcase his/her work. </p>
          <p className='about-p-light'>It’sMe is a creative psd portfolio template which focused on designer, developer, freelancer, photographer, architects, artists and many more individual who want to showcase his/her work. Layers are well organized with proper naming conventions so you can easily access and change things according your needs.It’sMe is a creative psd portfolio template.</p>
        </div>
        <button className='about-button'>Contact</button>
        </div>
    </div>
  )
}

export default About;
