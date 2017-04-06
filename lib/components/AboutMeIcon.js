import React from 'react';

const AboutMeIcon = ({src, name}) => {
  return(
    <div className='two-icon-container'>
      <img src={src}
           height='60px'
           alt={name}/>
      <p>{name}</p>
    </div>
  )
}

export default AboutMeIcon;
