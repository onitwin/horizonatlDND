import React,{useState,useEffect} from 'react';
import InitTracker from "./components/tracker/InitTracker"
import MyHeader from "./components/Myheader"
import CharacterForm from "./components/tracker/CharacterForm"





function App() {

  return (
  <div>
  <MyHeader/>
  <CharacterForm/>
  <InitTracker/>
  </div>
  )
}

export default App;
