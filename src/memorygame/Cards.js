import React from 'react';
import './Cards.css';



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