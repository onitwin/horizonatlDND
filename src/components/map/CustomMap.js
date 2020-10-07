import React,{useState,useEffect} from 'react';
import "nes.css/css/nes.min.css";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from "leaflet";

//map will go here

//map dimension = 6429 by 9000

let bounds = [[-200.00,-200.000], [1000,1000]];

const CustomMap=() =>{







return(
  <div className='mapdiv'>
  <Map  className='waterdeep-map' center={[0,0]} zoom={18}  alt="map" minZoom={-5} >
      <TileLayer url='/dragonsheist.jpg' tileSize={1520} bounds={bounds} />
      <Marker position={[0.00,0.00]} draggable={true}/>
  </Map>
  </div>
)










}

export default CustomMap;
