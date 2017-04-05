import React from 'react'
import Nav from './Nav';
import SocialMediaButton from './SocialMediaButton';

const Landing = () => {
  return(
      <div>
        <div className='one' id='home'>
          <Nav />
          <div className='big-space'></div>
          <h1 className='one-title'>I'm Bekah.</h1>
          <img src='/lib/images/mountains.svg'
               className='mountain-img' />
          <h2 className='one-moto'>Front End Developer, Designer, Creator</h2>
          <div className='one-socialmedia-container'>
            <SocialMediaButton href='https://github.com/bekahlundy' src='/lib/images/github-logo.svg' alt='github-logo' />
            <SocialMediaButton href='https://www.linkedin.com/in/bekah-lundy/' src='/lib/images/linkedin.svg' alt='linkedin-logo' />
            <SocialMediaButton href='mailto:lundyrebekah@gmail.com' src='/lib/images/mail.svg' alt='email-logo' />
            {/* <a href='https://shoot-the-breeze-293a7.firebaseapp.com/'
            target="_blank">
              <img src='/lib/images/github-logo.svg'
                   height='18px'
                   alt='github-logo'
                   className='icon' />
            </a>
            <a href='https://shoot-the-breeze-293a7.firebaseapp.com/'
            target="_blank">
              <img src='/lib/images/linkedin.svg'
                   height='18px'
                   alt='linkedin-logo'
                   className='icon' />
            </a>
            <a href="mailto:lundyrebekah@gmail.com"
              target="_blank">
              <img src='/lib/images/mail.svg'
                   height='18px'
                   alt='email-logo'
                   className='icon' />
            </a> */}
          </div>
        </div>
    </div>
  )
}

export default Landing;
