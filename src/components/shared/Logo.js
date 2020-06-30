import React from 'react'
import globe from './globe.svg'
import './Logo.css'

function Logo() {

  
  return (
    <div className='globe'>
        <img
          src={globe}
          alt='globe'
        />
        <h1 className='title-logo'>DoctoMAP</h1>
    </div>
  );
}

export default Logo