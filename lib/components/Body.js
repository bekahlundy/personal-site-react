import React from 'react'
import Landing from './Landing'
import About from './About'

const Body = () => {
  return(
    <div>
    <Landing />
      <div className='space'></div>
    <About />
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
