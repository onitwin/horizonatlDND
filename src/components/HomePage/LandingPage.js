import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InitTracker from "../tracker/InitTracker"
import ProficienciesTable from '../proficiencies/ProficienciesTable'

import Modal from 'react-modal';
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY="charactersStore"

const LandingPage=(props) =>{

//temporarily removed link
  // <ProficienciesTable characters={characters} proficiencies={proficiencies}/>

  const [modalIsOpen,setIsOpen] = React.useState(false);

  const [characters,setCharacters]=useState([])
  const [enemies,setEnemies]=useState([])

  useEffect(()=>{
    const charactersFetch=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(charactersFetch){
      setCharacters(charactersFetch);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(characters))
  },[characters])

  // character consists of object as follows:
  //   id:"",
  //   name:"",
  //   image:"",
  //   class:"",
  //   proficienciesHeld:[],
  //   proficienciesNotHeld:[]
  //will add co-ords when map component is added kk


  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function deleteCharacter(id){
    const newCharacterArray=characters
    console.log("starting array", characters) //checking starting state of characters
    console.log("new array",newCharacterArray) //checkinhg starting state of characters copy
    for (let character of newCharacterArray){
      if(character.id === id){
        newCharacterArray.splice(character.indexOf,1)
        setCharacters(newCharacterArray)
      }
    }
    console.log("updated new array",newCharacterArray) //checking end state of characters copy
    console.log("updated original array",characters)//checking end state of characters
  }

  function handleSubmit(event){
    event.preventDefault()
    const newHero={id:uuid(),name:event.target[0].value,
      image:`/${(event.target[1].value).toLowerCase()}.png`,
      class:event.target[1].value,
      proficienciesHeld:[],
      proficienciesNotHeld:[]};
    const proficiencies=event.target.proficiency;
    for (let proficiency of proficiencies){
      if (proficiency.checked===true){
        newHero.proficienciesHeld.push(proficiency.value)
      }
      else{
        newHero.proficienciesNotHeld.push(proficiency.value)
      }
    }
    setCharacters([...characters,newHero])
    closeModal();
  }

  const classes=[{class:'Barbarian'},{class:'Bard'},{class:'Cleric'},{class:'Druid'},{class:'Fighter'},{class:'Monk'},{class:'Paladin'},{class:'Wizard'},{class:'Sorcerer'},{class:'Warlock'},{class:'Ranger'}]

  const proficiencies=[{name:'Acrobatics'},{name:'Animal Handling'},{name:'Athletics'},{name:'Arcana'},{name:'Deception'},{name:'History'},{name:'Insight'},
  {name:'Intimidation'},{name:'Investigation'},{name:'Medicine'},{name:'Medicine'},{name:'Nature'},{name:'Perception'},{name:'Performance'},{name:'Persuasion'},{name:'Religion'},
  {name:'Slight of Hand'},{name:'Stealth'},{name:'Survival'}]

  const classOptions=classes.map((type)=>{
    return <option value={type.class} key={type.index}>{type.class} </option>
  })

  const profOptions=proficiencies.map((proficiency)=>{
    return(
      <div style={{display:'block'}} >
      <label style={{margin:'8px'}}for={proficiency.name}>{proficiency.name}</label>
      <input id={proficiency.name } name='proficiency' type="checkbox" value={proficiency.name}></input>
      <br/>
      </div>


    )
  })

  Modal.setAppElement('body')





  return (
    <div>

    <div className="modal-div">
    <button type="button" className="nes-btn is-success" onClick={openModal}>Add Character</button>

    <Modal
    className='myModal'
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    >
    <div style={{textAlign:'center'}}>

    <form onSubmit={handleSubmit}>
    <label style={{margin:'8px'}} for='nameInput'> Name</label>
    <input  style={{margin:'8px'}} name='nameInput'type='text' required></input>
    <label for='classInput'>Character Class</label>
    <select name='classInput' defaultValue="select-class">
    <option disabled value='select-class'>Select a class</option>
    <option value='Enemy'>Enemy</option>
    {classOptions}
    </select>
    <div>
    {profOptions}
    </div >

    <div style={{textAlign:'center',marginBottom:'1vh'}}>
    <button style={{display:"inline-block"}} className='nes-btn is-success' type="submit">Save</button>
    </div>
    </form>

    </div>
    <button onClick={closeModal} className="nes-btn is-primary">Close Window</button>
    </Modal>
    </div>

    <InitTracker  deleteCharacter={deleteCharacter} characters={characters}/>

    </div>
  )











}
export default LandingPage
