import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div >
       <h3 style={{color:'white',fontSize:"larger"}}> Coding Made Simple</h3>
      </div>
      <div className='navContainer'>
        <button className='btn'>Bootstrap</button>
        <button className='btn'>Themes</button>
        <button className='btn'>Blog</button>
      </div>
    </div>
  )
}

export default Navbar
