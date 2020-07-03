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
        $(document).off('mousemove')
    }

    render() {
        return (
                <NavLink to="/Map"><div href="/Map" className="btn-liquid">
                    <span className="inner">Go to World Map</span>
                </div></NavLink>
        )
    }
}

export default Enter