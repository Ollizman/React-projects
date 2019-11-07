import React, { Component } from 'react';
import './Memorygame.css';
import Cards from './Cards';
import MemorygameOver from './MemorygameOver'


let firstClick = 0
let secondClick = 0
let firstName = ''
let secondName = ''
let timer

class Memorygame extends Component {

  state = {
    animals: [
      { id: 1, name: 'dog', active: false },
      { id: 2, name: 'cat', active: false },
      { id: 3, name: 'horse', active: false },
      { id: 4, name: 'snake', active: false },
      { id: 5, name: 'elephant', active: false },
      { id: 6, name: 'mouse', active: false },
      { id: 7, name: 'lion', active: false },
      { id: 8, name: 'giraffe', active: false },
      { id: 9, name: 'dog', active: false },
      { id: 10, name: 'cat', active: false },
      { id: 11, name: 'horse', active: false },
      { id: 12, name: 'snake', active: false },
      { id: 13, name: 'elephant', active: false },
      { id: 14, name: 'mouse', active: false },
      { id: 15, name: 'lion', active: false },
      { id: 16, name: 'giraffe', active: false }
    ],
    click: 1,
    gameOverCounter: 0

  }

  clickHandler = (animal) => {
    if (this.state.click === 1) {
      firstClick = animal.id;
      firstName = animal.name
      this.setState(prevState => ({
        animals: prevState.animals.map(
          ani => ani.id === animal.id ? { ...ani, active: true } : ani
        )
      }))
    } else {
      secondClick = animal.id;
      secondName = animal.name;
      this.setState(prevState => ({
        animals: prevState.animals.map(
          ani => ani.id === animal.id ? { ...ani, active: true } : ani
        )
      }))
      firstClick !== secondClick & firstName === secondName && (this.hit(animal))

      timer = setTimeout(handleEndOfTurn(), 1000)

    }

    function handleEndOfTurn() {
      firstClick = 0;
      firstName = '';
      secondClick = 0;
      secondName = '';
      clearTimeout(timer)
    }

    console.log('First = ' + firstClick + ' ' + firstName)
    console.log('Second = ' + secondClick + ' ' + secondName)
    
    if (this.state.click === 1) {
      this.setState({ click: 2 })
    } else {
      this.setState({ click: 1 })
    }

  }

  hit = (animal) => {
    console.log('Jippii')
    const name = animal.name;
    console.log(name)
    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.name === name ? { ...ani, active: 'done' } : ani
      ),
      gameOverCounter : this.state.gameOverCounter + 1
        
    }))
    console.log('gameoverCounter: ' + this.state.gameOverCounter)
    // this.state.gameOverCounter === 8 && this.setState({gameOverCounter : 'over'})
  }



  clickNomatch = () => {
    //miss cliks
    console.log("missclicki!")
  }
  componentDidMount = () => {
    this.shuffle(this.state.animals)
  }

  shuffle = (array) => { //sekoittaa annetun arrayn järjestyksen!
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

    return (
      <>
        {this.state.animals.map(animal => (
          <Cards
            key={animal.id}
            name={animal.name}
            active={animal.active}
            click={animal.active !== 'done' ? (() => this.clickHandler(animal)) : undefined} />

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
        <button>Uusi peli</button>
        {this.state.gameOverCounter === 8 && <MemorygameOver /> }
      </div>
    );
  }
}
export default Memorygame;
// && console.log('Game Over')