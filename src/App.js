import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContainer from './Containers/MainContainer'
// import InitTracker from "./components/tracker/InitTracker"
// import MyHeader from "./components/Myheader"
// import Modal from 'react-modal';
// import uuid from 'react-uuid'
// import CustomMap from './components/map/CustomMap'
// import ProficienciesTable from './components/proficiencies/ProficienciesTable'

//page should only return log in request (when functionality added) or LandingPage if logged in.



function App() {
  return(
  <MainContainer/>
)
}

export default App;
