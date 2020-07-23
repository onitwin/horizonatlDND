import React,{useState,useEffect} from 'react';
import InitTracker from "./components/InitTracker"






function App() {

  return (
    <div>
  <header>
  <h1 style={{display:'inline-flex'}}>8-Bit Adventurer</h1><h3 style={{display:'inline-flex',marginLeft:'50px'}}>-DMs Toolbox</h3>
  </header>
  <InitTracker/>
  </div>
  )
}

export default App;
