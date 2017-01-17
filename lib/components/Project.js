import React from 'react'

const Project = ({className, src, alt}) => {
  return(
    <div className='inline'>
      <img
        className={className}
        src={src}
        alt={alt}></img>
    </div>
  )
}

export default Project;
