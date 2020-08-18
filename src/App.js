import React,{useState,useEffect} from 'react';
import InitTracker from "./components/tracker/InitTracker"
import MyHeader from "./components/Myheader"
import Modal from 'react-modal';
import uuid from 'react-uuid'
// import CustomMap from './components/map/CustomMap'
// import ProficienciesTable from './components/proficiencies/ProficienciesTable'





function App() {




  const [modalIsOpen,setIsOpen] = React.useState(false);

  const [characters,setCharacters]=useState([])

  // character consists of object as follows:
  //   id:"",
  //   name:"",
  //   image:"",
  //   class:"",
  //   proficienciesHeld:[],
  //   proficienciesNotHeld:[]
  //will add co-ords when map component is added


  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
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
    console.log(characters+ "log of characters from the app component")
    closeModal();
  }

  const classes=[{class:'Barbarian'},{class:'Bard'},{class:'Cleric'},{class:'Druid'},{class:'Fighter'},{class:'Monk'},{class:'Wizard'},{class:'Sorcerer'},{class:'Warlock'},{class:'Ranger'}]

  const proficiencies=[{name:'Acrobatics'},{name:'Animal Handling'},{name:'Athletics'},{name:'Arcana'},{name:'Deception'},{name:'History'},{name:'Insight'},
  {name:'Intimidation'},{name:'Investigation'},{name:'Medicine'},{name:'Medicine'},{name:'Nature'},{name:'Perception'},{name:'Performance'},{name:'Persuasion'},{name:'Religion'},
  {name:'Slight of Hand'},{name:'Stealth'},{name:'Survival'}]

  const classOptions=classes.map((type)=>{
    return <option value={type.class} >{type.class}</option>
  })

  const profOptions=proficiencies.map((proficiency)=>{
    return(
      <div style={{display:'inline-block'}} >
      <label style={{margin:'8px'}}for={proficiency.name}>{proficiency.name}</label>
      <input id={proficiency.name } name='proficiency' type="checkbox" value={proficiency.name}></input>
      <br/>
      </div>


    )
  })

  Modal.setAppElement('body')





  return (
    <div>
    <MyHeader/>
    <div>
    <button type="button" className="nes-btn is-success" onClick={openModal}>Add Character</button>

    <Modal
    className='myModal'
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    >
    <div style={{textAlign:'left'}}>

    <form onSubmit={handleSubmit}>
    <label style={{margin:'8px'}} for='nameInput'> Name</label>
    <input  style={{margin:'8px'}} name='nameInput'type='text' required></input>
    <label for='classInput'>Character Class</label>
    <select name='classInput' defaultValue="select-class">
    <option disabled value='select-class'>Select a class</option>
    {classOptions}
    </select>
    <div>
    {profOptions}
    </div >
    <button style={{display:"block"}} className='nes-btn is-success' type="submit">Save</button>
    </form>

    </div>
    <button onClick={closeModal} className="nes-btn is-primary">Close Window</button>
    </Modal>
    </div>

    <InitTracker  characters={characters}/>
    </div>
  )
}

export default App;
