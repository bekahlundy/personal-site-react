import React from 'react';
import Project from './Project'

const Projects = () => {
  return(
    <div className='projects-container' id='work'>
      <h1 className='projects-title'>Projects</h1>
      <div className='projects'>
         <Project title='Weather App'
                  skills={['React', 'Redux', 'React Router', 'Es6', 'External Api']}
                  paragraph='Feel Better. Stronger. Healthier. itects, artists and many more individual who want to ' repo='https://github.com/bekahlundy/redux-weather-app'
                  live='https://shoot-the-breeze-293a7.firebaseapp.com/' />
         <Project title='Nourish'
                  skills={['React', 'Redux', 'React Router', 'ES6', 'D3']}
                  paragraph='Feel Better. Stronger. Healthier. itects, artists and many more individual who want to ' repo='https://github.com/bekahlundy/nourish'
                  live='https://shoot-the-breeze-293a7.firebaseapp.com/' />
         <Project title='IdeaBox'
                  skills={['ES6', 'Redux', 'React Router']}
                  paragraph='Feel Better. Stronger. Healthier. itects, artists and many more individual who want to ' repo='https://github.com/bekahlundy/ideaBox'
                  live='https://bekahlundy.github.io/ideaBox/' />
         <Project title='Frogger In New York'
                  skills={['JQuery', 'ES5', 'HTML5 Canvas', 'Mocha']}
                  paragraph='Feel Better. Stronger. Healthier. itects, artists and many more individual who want to ' repo='https://github.com/bekahlundy/Game-Time-/'
                  live='https://bekahlundy.github.io/Game-Time-/' />
        <Project title='Messaging App'
                  skills={['React', 'FireBase', 'ES6', 'Enzyme', 'Chai']}
                  paragraph='Feel Better. Stronger. Healthier. itects, artists and many more individual who want to ' repo='https://github.com/bekahlundy/shoot-the-breeze'
                  live='https://shoot-the-breeze-293a7.firebaseapp.com/' />
      </div>
    </div>
  )
}

export default Projects;
