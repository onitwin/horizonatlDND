import React,{useState,Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../components/HomePage/LandingPage'
import MyHeader from '../components/Myheader'
import CustomMap from '../components/map/CustomMap'
import RandomTableContainer from '../components/RandomTables/RandomTableContainer'
import Navbar from '../components/Navbar'





function MainContainer() {
  return(
  <Router>
  <Fragment>
  <MyHeader/>
  <Navbar/>
  <Switch>
  <Route path='/maps' component={CustomMap}/>
  <Route path='/generators' component={RandomTableContainer}/>
  <Route path='/' component={LandingPage}/>

  </Switch>

  </Fragment>
  </Router>
)
}

export default MainContainer;
