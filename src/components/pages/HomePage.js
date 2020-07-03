import React from 'react';

import Enter from './Enter'
import Logo from '../shared/Logo'
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Logo />
            <div className="div-enter">
                <div className='text-HomePage'>
                    <p>Travel Serene,</p> 
                    <p>Travel Vaccinated</p>
                </div>
                <div className="div-Enter">
                    <Enter />
                </div>
            </div>
        </div>
    )
}

export default HomePage

