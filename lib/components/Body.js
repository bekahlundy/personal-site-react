import React from 'react'

const Body = () => {
  return(
    <div>
      <div className='one'>
        <div className='one-middle'>
        </div>
        <h1 className='one-title'>I'm Bekah.</h1>
        <h2 className='one-moto'>
        Front end Developer, Designer, Creator</h2>
      </div>
      <div className="wrapper">
        <div className="triangle-down"><div></div></div>
      </div>
      <div className='space'></div>
      <div className='two'>
        <h1 className='two-about'>about me</h1>
        <div className='two-icon-container'>
          <img src='./' alt='dev' />
          <p>Developer</p>
        </div>
        <div className='two-icon-container'>
          <img src='./' alt='ux/ui' />
          <p>Designer</p>
        </div>
        <div className='two-icon-container'>
          <img src='./' alt='phot' />
          <p>Creator</p>
        <div className='two-p-container'>
          <p className='two-p-bold'>bold</p>
          <p className='two-p-light'>light</p>
        </div>
        </div>
      </div>
      <div className='space'></div>
      <div className='three'>
        <div className='three-outline'>
          <h1 className='three-h1'>Feel Better. Stronger. Healthier.</h1>
          <p className='three-catchphrase'></p>
        <button className='three-button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Body;
