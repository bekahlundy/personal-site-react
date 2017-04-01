import React from 'react'
import Nav from './Nav';

const Body = () => {
  return(
    <div>
      <div className='one' id='home'>
        <Nav />
        <div className='big-space'></div>
      <h1 className='one-title'>I'm Bekah.</h1>
      <h2 className='one-moto'>Front end Developer, Designer, Creator</h2>
      <div className='one-socialmedia-container'>
        <a href='https://shoot-the-breeze-293a7.firebaseapp.com/'
        target="_blank">
          <img
            src='/lib/images/github-logo.svg' height='15px'
            alt='github-logo'
            className='icon'/>
        </a>
        <a href='https://shoot-the-breeze-293a7.firebaseapp.com/'
        target="_blank">
          <img
            src='/lib/images/github-logo.svg' height='15px'
            alt='github-logo'
            className='icon'/>
        </a>
        <a href='https://shoot-the-breeze-293a7.firebaseapp.com/'
        target="_blank">
          <img
            src='/lib/images/github-logo.svg' height='15px'
            alt='github-logo'
            className='icon'/>
        </a>
      </div>
      </div>
      <div className="wrapper">
        <div className="triangle-down">
          <div></div>
        </div>
      </div>
      <div className='space'></div>
      <div className='two' id='about'>
        <h1 className='two-about'>about me</h1>
        <div className='two-icons-container'>
          <div className='two-icon-container'>
            <img
              src='/lib/images/developer.svg' height='60px'
              alt='dev'/>
            <p>developer</p>
          </div>
          <div className='two-icon-container'>
            <img
              src='./lib/images/designer.svg'
              height='60px'
              alt='ux/ui' />
            <p>designer</p>
          </div>
          <div className='two-icon-container'>
            <img
              src='./lib/images/creator.svg'
              height='60px'
              alt='create' />
            <p>creator</p>
          </div>
        </div>
        <div className='two-p-container'>
          <p className='two-p-bold'>It’sMe is a creative psd portfolio template which focused on designer, developer, freelancer, photographer, architects, artists and many more individual who want to showcase his/her work. </p>
          <p className='two-p-light'>It’sMe is a creative psd portfolio template which focused on designer, developer, freelancer, photographer, architects, artists and many more individual who want to showcase his/her work. Layers are well organized with proper naming conventions so you can easily access and change things according your needs.It’sMe is a creative psd portfolio template.</p>
        </div>
        <button className='two-button'>Contact</button>
        </div>
        <div className='space'></div>
        <div className="isosceles"></div>
        <div className='three' id='work'>
          <h1 className='three-project-header'>Projects</h1>
          <div className='three-projects'>
            <div className='three-indv-project'>
              <div className='three-triangle-topright'></div>
              <p className='three-project-title'>Weather App</p>
              <ul className='three-project-ul'>
                <li className='three-project-li'>React</li>
                <li className='three-project-li'>Redux</li>
                <li className='three-project-li'>React Router</li>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>External Api</li>
              </ul>
              <h1 className='three-project-explaination'>Feel Better. Stronger. Healthier. itects, artists and many more individual who want to </h1>
              <a
                href="https://github.com/bekahlundy/redux-weather-app"
                target="_blank">Github Repo</a> | <a
                  href='https://shoot-the-breeze-293a7.firebaseapp.com/'
                  target="_blank">Live</a>
            </div>
            <div className='three-indv-project'>
              <div className='three-triangle-topright'></div>
              <p className='three-project-title'>Nourish</p>
              <ul className='three-project-ul'>
                <li className='three-project-li'>React</li>
                <li className='three-project-li'>Redux</li>
                <li className='three-project-li'>React Router</li>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>D3</li>
              </ul>
              <h1 className='three-project-explaination'>Feel Better. Stronger. Healthier. itects, artists and many more individual who want to </h1>
              <a
                href="https://github.com/bekahlundy/nourish"
                target="_blank">Github Repo</a> | <a
                  href='https://shoot-the-breeze-293a7.firebaseapp.com/'
                  target="_blank">Live</a>
            </div>
            <div className='three-indv-project'>
              <div className='three-triangle-topright'></div>
              <p className='three-project-title'>IdeaBox</p>
              <ul className='three-project-ul'>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>Redux</li>
                <li className='three-project-li'>React Router</li>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>External Api</li>
              </ul>
              <h1 className='three-project-explaination'>Feel Better. Stronger. Healthier. itects, artists and many more individual who want to </h1>
              <a
                href="https://github.com/bekahlundy/ideaBox"
                target="_blank">Github Repo</a> | <a
                  href='https://bekahlundy.github.io/ideaBox/'
                  target="_blank">Live</a>
            </div>
            <div className='three-indv-project'>
              <div className='three-triangle-topright'></div>
              <div className='three-triangle-topright'></div>
              <p className='three-project-title'>Frogger</p>
              <ul className='three-project-ul'>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>HTML5 Canvas</li>
              </ul>
              <h1 className='three-project-explaination'>Feel Better. Stronger. Healthier. itects, artists and many more individual who want to </h1>
              <a
                href="https://github.com/bekahlundy/Game-Time-"
                target="_blank" >Github Repo</a> | <a
                  href='https://shoot-the-breeze-293a7.firebaseapp.com/'
                  target="_blank">Live</a>
            </div>
            <div className='three-indv-project'>
              <div className='three-triangle-topright'></div>
              <p className='three-project-title'>Messaging App</p>
              <ul className='three-project-ul'>
                <li className='three-project-li'>React</li>
                <li className='three-project-li'>FireBase</li>
                <li className='three-project-li'>ES6</li>
                <li className='three-project-li'>Enzyme</li>
                <li className='three-project-li'>Chai</li>
              </ul>
              <h1 className='three-project-explaination'>Feel Better. Stronger. Healthier. itects, artists and many more individual who want to </h1>
              <a
                href="https://github.com/bekahlundy/shoot-the-breeze"
                target="_blank">Github Repo</a> | <a
                  href='https://shoot-the-breeze-293a7.firebaseapp.com/'
                  target="_blank">Live</a>
            </div>
          </div>
        </div>
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
