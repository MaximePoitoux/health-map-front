import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Enter2.css'
import $ from 'jquery'
import LiquidButton from '../shared/LiquidButton'

class Enter extends Component {

    componentDidMount() {
        $(LiquidButton())
    }

    componentWillUnmount() {
        // $(document).off('mousemove', 'mouseclick')
        // $(document).cancelAnimationFrame()
        // $(LiquidButton()('destroy'))
        // $(document).detach()
        // $(document).remove()
        // $(LiquidButton()).detach()
        // $(LiquidButton()).remove()

        

    }

    render() {
        return (
                <NavLink to="/Map">
                    <div href="/Map" className="btn-liquid">
                        <span className="inner">Go to World Map</span>
                    </div>
                </NavLink>
        )
    }
}

export default Enter