import React,{useState,useEffect} from 'react';
import "nes.css/css/nes.min.css";

const Navbar=() =>{


return(
  <ul className="navbarContainer">
  <li className="navlink"><button className="nes-btn is-failure"><a href="/">Homepage</a></button></li>
  <li className="navlink"><button className="nes-btn is-failure"><a href="/maps">Cartographer</a></button></li>
  <li className="navlink"><button className="nes-btn is-failure"><a href="generators">Random Generators</a></button></li>

  </ul>
)










}

export default Navbar;
