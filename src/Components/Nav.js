import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <div>
       <h3 style={{color:'white',fontSize:"larger"}}> Koding Made Sample</h3>
      </div>
      <div className='nav-links'>
        <button className='links'>Bootstrap</button>
        <button className='links'>Themes</button>
        <button className='links'>Blog</button>
      </div>
    </div>
  )
}

export default Nav