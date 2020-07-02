import React from 'react'

import { NavLink } from "react-router-dom"
import './Enter2.css'
import '../shared/LiquidButton.js'

class Enter extends React.Component {

    render() {
        return (
            <div>
                <LiquidButton >
                    <NavLink to="/Map"><div href="/Map" className="btn-liquid">
                        <span className="inner">Go to World Map</span>
                    </div></NavLink>
                </LiquidButton>

            </div>
        )
    }
}

export default Enter