import React ,{useState,Fragment} from 'react'
import ReactDom from 'react-dom'
import Modal from 'react-modal';



const CharacterForm=()=>{

  const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
    setIsOpen(false);
  }

  const classes=[{name:'Barbarian'},{name:'Bard'},{name:'Cleric'},{name:'Druid'},{name:'Fighter'},{name:'Monk'},{name:'Wizard'},{name:'Sorcerer'},{name:'Warlock'},{name:'Ranger'}]

  const proficiencies=[{name:'Acrobatics'},{name:'Animal Handling'},{name:'Athletics'},{name:'Arcana'},{name:'Deception'},{name:'History'},{name:'Insight'},
{name:'Intimidation'},{name:'Investigation'},{name:'Medicine'},{name:'Medicine'},{name:'Nature'},{name:'Perception'},{name:'Performance'},{name:'Persuasion'},{name:'Religion'},
{name:'Slight of Hand'},{name:'Stealth'},{name:'Survival'}]

  const classOptions=classes.map((type)=>{
      return <option value='type'>{type.name}</option>
    })

    const profOptions=proficiencies.map((type)=>{
        return(
          <Fragment>
        <label style={{margin:'8px'}}for={type.name}>{type.name}</label>
        <input name={type.name} type="checkbox" value={type.name}></input>
        <br/>
        </Fragment>


      )
      })




  return(
    <div>
    <button type="button" class="nes-btn is-success" onClick={openModal}>Add Character</button>

    <Modal
    className='myModal'
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    >
    <div style={{textAlign:'left'}}>
    <form>
    <label style={{margin:'8px'}} for='name-input'> Name</label>
    <input name='name-input'type='text'></input>
    <label for='class-input'>Character Class</label>
    <select name='class-input' defaultValue="select-class">
    <option disabled value='select-class'>Select a class</option>
    {classOptions}
    </select>
    {profOptions}
    <button className='nes-btn is-success' type="submit">Save</button>

    </form>
    </div>
    <button onClick={closeModal} class="nes-btn is-primary">Close Window</button>
    </Modal>
    </div>

  )

}

export default CharacterForm;
