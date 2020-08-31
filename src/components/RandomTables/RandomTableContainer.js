import React,{useState,useEffect,Fragment} from 'react';
import "nes.css/css/nes.min.css";
import RandomMagicItems from './RandomMagicItems'
import RandomWeatherGenerator from './RandomWeatherGenerator'
import RandomNpcGenerator from './RandomNpcGenerator'



const RandomTableContainer=() =>{


return(
  <Fragment>
  <h1>Random Tables</h1>
  <RandomMagicItems/>
  <RandomNpcGenerator/>
  <RandomWeatherGenerator/>
  </Fragment>
)










}

export default RandomTableContainer;
