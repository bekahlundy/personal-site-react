import React from 'react'

const SocialMediaButton = ({href, src, alt}) => {
  return(
    <div className='inline-block'>
      <a href={href}
      target="_blank">
        <img src={src}
             height='18px'
             alt={alt}
             className='icon' />
      </a>
    </div>
  )
}

export default SocialMediaButton
