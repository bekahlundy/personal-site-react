import React from 'react';

const Project = ({ title, skills, paragraph, repo, live }) => {

  let skill = skills.map((el) => {
    return <li>{el}</li>;
  })
  
  return(
    <div className='indv-project'>
      {/* <div className='triangle-topright'></div> */}
      <p className='project-title'>{title}</p>
      <ul className='project-ul'>
          <li>{skill}</li>
      </ul>
      <h1 className='project-paragraph'>{paragraph}</h1>
      <a
        href={repo}
        target="_blank">Github Repo</a> | <a
          href={live}
          target="_blank">Live</a>
    </div>
  )
}

export default Project;
