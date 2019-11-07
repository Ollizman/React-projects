import React from 'react';
import './Cards.css';



/*const doCards = () => {
   animals.map(animal => ({order:getRandomInt(animal.id,16), }))
    
        return(
        <div className= {'card ' + animals[i].name}>
            ID: {animals[i].id}
        </div>
        )
        
    
    
}*/

const Cards = (props) => {
    
        return(
        
        <div className= {'card '+ props.name + (props.active === true ? " active" : '')} 
        onClick = {props.click} >     
             
         {props.active === true && props.name}
        <p> {props.active === 'done' && 'Done! ' + props.name} </p>
        
        </div>
        );
    
}

export default Cards;