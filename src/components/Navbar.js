import React from 'react';
import "nes.css/css/nes.min.css";

const Navbar=() =>{

//links rendered using buttons due to stylesheet requirments/personal taste
return(
  <ul className="navbarContainer">
  <li className="navlink"><a href="/"><button className="nes-btn is-failure">Homepage</button></a></li>
  <li className="navlink"><a href="/maps"><button className="nes-btn is-failure">Cartographer</button></a></li>
  <li className="navlink"><a href="generators"><button className="nes-btn is-failure">Random Generators</button></a></li>

  </ul>
)










}

export default Navbar;
