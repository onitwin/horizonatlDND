import React,{useState,useEffect} from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import uuid from 'react-uuid'
import "nes.css/css/nes.min.css";



//destructured props.characters
const InitTracker=({characters}) =>{

  const [tiles,setTiles]=useState([]) //individual tiles for drag and drop- populate with characters prop

  useEffect(()=>{
    if(characters){ //if characters prop exists, set tiles as equal to that prop
    setTiles(characters) //set contents of tiles
    setColumns({ //set contents of dropzone equal to new tiles value
      [uuid()]:{
        name:'Initiative Order',
        items:characters
      }
    })

  }
},[characters]) //update if and when characters prop updates




  const listOfColumns={ //dropzone set up
    [uuid()]:{
      name:'Initiative Order',
      items:tiles
    }
  }



  const [columns,setColumns]=useState(listOfColumns);

  const onDragEnd=(result,columns,setColumns)=>{ //onDragEnd function- when item dropped initiate function
    if(!result.destination) return;

    const {source,destination}=result; //obtain source position and destination position
    const column =columns[source.droppableId]; //column UUID value is equal to source column (in event of multiple columns)
    const copiedItems=[...column.items];// copied items set equal to result of items from listOfColumns object
    const [removed]=copiedItems.splice(source.index,1); //splice source item from objecrt
    copiedItems.splice(destination.index,0,removed); //splice item back in at new position
    setColumns({ //set coluns as equal to the newly spliced and re-ordered items
      ...columns,[source.droppableId]:{
        ...column,
        items:copiedItems
      }
    })
  };




  return (

    <div style={{textAlign:'center'}}>
    <p  className="nes-text is-primary" style={{ display:'block',textAlign:'center'}}>Initiative/Order of March</p>
    <p  className="nes-text is-primary" style={{ display:'block',textAlign:'center'}}>Drag and Drop</p>

    <div style={{ display:'inline-block',textAlign:'center'}}>


    <DragDropContext onDragEnd={result=>onDragEnd(result,columns,setColumns)}>
    {Object.entries(columns).map(([id,column])=>{
      return(
        <Droppable droppableId={id} key={id} direction="horizontal">
        {(provided,snapshot)=>{
          return (
            <div
            className="dropzone "
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
                    <div className={item.class}  style={{textAlign:'center', border:'1px solid black'}}>
                      <img style={{width:'50px',height:'50px'}} title={item.class} src={item.image} alt={item.class}/>
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
    </div>

  )

}

export default InitTracker;
