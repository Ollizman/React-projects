import React, { Component } from 'react';
import './Memorygame.css';
import Cards from './Cards';


// let animals = [
//     {id : 1, name: 'dog'},
//     {id : 2, name: 'cat'},
//     {id : 3, name: 'horse'},
//     {id : 4, name: 'snake'},
//     {id : 5, name: 'elephant'},
//     {id : 6, name: 'mouse'},
//     {id : 7, name: 'lion'},
//     {id : 8, name: 'giraffe'},
// ];
let clicks = [];

class Memorygame extends Component {
  
state = { 
    animals : [
    {id : 1, name: 'dog', active:false},
    {id : 2, name: 'cat', active:false},
    {id : 3, name: 'horse', active:false},
    {id : 4, name: 'snake', active:false},
    {id : 5, name: 'elephant', active:false},
    {id : 6, name: 'mouse', active:false},
    {id : 7, name: 'lion', active:false},
    {id : 8, name: 'giraffe', active:false}
]
}


clickHandler = (animal) => {
    clicks.push(animal.id);
    console.log(animal.id);
    console.log(clicks);
    let x = clicks.length;
    console.log(x);
  // clicks[x-1] === clicks[x-2] ? 
    // //this.setState({...state, animals: state.results.filter(result => result.id !== animal.id)});
    //  this.setState({ ...this.state.animals[animal.id], : true }) :
    // this.clickNomatch();
   // console.log(this.clicks);
  //  ...state, results: state.results.concat({id: new Date(), value: action.result})
 

}



clickNomatch = () => {
    //miss cliks
    console.log("missclicki!")
}

shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
doCards = () => {

  //  let animals2 = this.state.animals.concat(this.state.animals);
    //console.log(animals2);
   // this.shuffle(animals2);

    return (
        <>
            {this.state.animals.map(animal => (
        <Cards 
        key = {animal.id}
        name = {animal.name}
        active = {animal.active}
        click = {() => this.clickHandler(animal)}/>

        ))}
        </>

    )
}

render() {
    return (
    <div className="grid-container">
        <div className="wrapper">
        {this.doCards()}

</div>
    </div>           
    );
}
}
export default Memorygame;