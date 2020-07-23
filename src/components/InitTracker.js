import React,{useState,useEffect} from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import uuid from 'react-uuid'
import "nes.css/css/nes.min.css";

const tiles=[
  {id:uuid(),name:'Wren',color:'red',class:"./wizard.png"},
  {id:uuid(),name:'Vaelys',color:'blue',class:"./monk.png"},
  {id:uuid(),name:'Hedge',color:'pink',class:"./paladin.png"},
  {id:uuid(),name:'Wanda',color:'red',class:"./sorcerer.png"},
  {id:uuid(),name:'Evil 1',color:'red',class:"./fighter.png"},
  {id:uuid(),name:'Evil 2',color:'red',class:"./ranger.png"},
  {id:uuid(),name:'Evil 3',color:'red',class:"./barbarian.png"},
  {id:uuid(),name:'Evil 4ha ha ha hah aha hah',color:'red',class:"./warlock.png"}

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
                    <div style={{textAlign:'center',background:'red', border:'1px solid blue'}}>
                      <img style={{width:'50px',height:'50px'}} src={item.class}/>
                    <p>{item.name}</p>
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
