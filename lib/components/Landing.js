import React from 'react'
import Nav from './Nav';
import SocialMediaButton from './SocialMediaButton';

const Landing = () => {
  return(
      <div>
        <div className='landing-container' id='home'>
          <Nav />
          <div className='big-space'></div>
          <h1 className='title'>I'm Bekah.</h1>
          <img className='mountain-img'
               src='/lib/images/mountains.svg' />
          <h2 className='tagline'>Front End Developer, Designer, Creator</h2>
          <div className='socialmedia-container'>
            <SocialMediaButton href='https://github.com/bekahlundy'
                               src='/lib/images/github-logo.svg'
                               alt='github-logo' />
            <SocialMediaButton href='https://www.linkedin.com/in/bekah-lundy/'
                               src='/lib/images/linkedin.svg'
                               alt='linkedin-logo' />
            <SocialMediaButton href='mailto:lundyrebekah@gmail.com'
                               src='/lib/images/mail.svg'
                               alt='email-logo' />
          </div>
        </div>
    </div>
  )
}

export default Landing;
