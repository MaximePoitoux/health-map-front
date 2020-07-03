import React from 'react'
import { NavLink } from 'react-router-dom'
import './VaccinationCountryBox.css'


const VaccinationCountryBox = props => {
  return (
    <div className='background-VaccinationCountryBox'>
      <img className= 'image' src={require(`../picture/${props.map}.jpg`)} alt={props.map} />
      <h1>{props.map}</h1>

      {props.mapCountry.map(country => {
        return (
          <div className='countryList'>
            <p className='p-country-disease'>{country.disease}</p>
            <p className='p-country-value'>{country.value}</p>
          </div>
        )
      })}
      <div className="div-show-calendar">
        <NavLink className='show-calendar' to="/Calendar">Show Calendar : <i class="fas fa-syringe"></i></NavLink>
      </div>
    </div>
  )
}

export default VaccinationCountryBox