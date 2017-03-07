import React from 'react'
import { Link } from 'react-router';

const Project = ({className, src, alt, title}) => {
  console.log('project', {title})
  return(
    <div className='inline'>
        <Link to={title}>
          <img
          className={className}
          src={src}
          alt={alt}></img>
          <h3 className='title'>{title}</h3>
        </Link>
    </div>
  )
}

export default Project;
