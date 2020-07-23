import React,{useState,useEffect} from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import uuid from 'react-uuid'
import "nes.css/css/nes.min.css";

const tiles=[
  {id:uuid(),name:'Wren',image:"./wizard.png",class:'wizard'},
  {id:uuid(),name:'Vaelys',image:"./monk.png",class:'monk'},
  {id:uuid(),name:'Hedge',image:"./paladin.png",class:'paladin'},
  {id:uuid(),name:'Wanda',image:"./sorcerer.png",class:'sorcerer'},
  {id:uuid(),name:'Evil 1',image:"./fighter.png",class:'fighter'},
  {id:uuid(),name:'Evil 2',image:"./ranger.png",class:'ranger'},
  {id:uuid(),name:'Evil 3',image:"./barbarian.png",class:'barbarian'},
  {id:uuid(),name:'Evil 4',image:"./warlock.png",class:'warlock'}

]


const listOfColumns={
  [uuid()]:{
    name:'Todo',
    items:tiles
  }
}

//this is code for a single column
const onDragEnd=(result,columns,setColumns)=>{
  if(!result.destination) return;

  const {source,destination}=result;
  const column =columns[source.droppableId];
  const copiedItems=[...column.items];
  const [removed]=copiedItems.splice(source.index,1);
  copiedItems.splice(destination.index,0,removed);
  setColumns({
    ...columns,[source.droppableId]:{
      ...column,
      items:copiedItems
    }
  })
};




const InitTracker=() =>{
  const [columns,setColumns]=useState(listOfColumns);

  return (
    <div style={{
    display:'flex',
    justifyContent:'center',
    height:'100%'}}>
    <button type="button" class="nes-btn is-primary" style={{backgroundColor:'white',color:'black'}}>These buttons</button>
    <button type="button" class="nes-btn is-warning">do nothing</button>


    <DragDropContext onDragEnd={result=>onDragEnd(result,columns,setColumns)}>
    {Object.entries(columns).map(([id,column])=>{
      return(
        <Droppable droppableId={id} key={id} direction="horizontal">
        {(provided,snapshot)=>{
          return (
            <div
            className="dropzone"
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
            {column.items.map((item,index)=>{
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided,snapshot)=>{
                  return(
                    <div className='dragbox'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                    ...provided.draggableProps.style
                    }}
                    >
                    <div className={item.class} style={{textAlign:'center', border:'1px solid black'}}>
                      <img style={{width:'50px',height:'50px'}} src={item.image}/>
                    <p style={{overflow:'scroll'}}>{item.name}</p>
                    </div>
                    </div>
                  )
                }}
                </Draggable>
              )
            })}
            {provided.placeholder}
            </div>
          )
        }}
        </Droppable>
      )
    })}

    </DragDropContext>
    </div>
  )
}

export default InitTracker;
