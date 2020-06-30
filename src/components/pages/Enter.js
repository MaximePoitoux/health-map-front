import React from 'react'

import { NavLink } from "react-router-dom"
import './Enter2.css'

class Enter extends React.Component {

    render() {
        return (
            <div>
                <NavLink to="/Map"><a href="/Map" class="btn-liquid">
                    <span class="inner">Go to World Map</span>
                </a></NavLink>
            </div>
        )
    }
}

export default Enter