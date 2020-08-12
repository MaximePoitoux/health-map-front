import React from 'react';
import { Switch, Route } from "react-router-dom"
import Map from './components/pages/Map'
import VaccinationCountry from './components/pages/VaccinationCountry'
import HomePage from './components/pages/HomePage'
import Calendar from './components/pages/Calendar'
import './App.css'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/map" component={Map} />
          <Route path="/vaccinationcountry" component={VaccinationCountry} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
    </div>
  )
}

export default App
