import React,{useState,useEffect} from 'react';
import "nes.css/css/nes.min.css";
import ProficienciesRow from './ProficienciesRow'

const ProficienciesTable=({proficiencies,characters}) =>{

  const headers=proficiencies.map((proficiency)=>{
    return(
      <th className="table-headers"> {proficiency.name}</th>
    )
  })


return(
  <div>
  <tr>
  <th className='header-alignment-div'>empty</th>
  {headers}
  </tr>
  <ProficienciesRow characters={characters}/>
  </div>

)










}

export default ProficienciesTable;
