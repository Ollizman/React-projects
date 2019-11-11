import React, { Component } from 'react';
import './Memorygame.css';
import Cards from './Cards';
import MemorygameOver from './MemorygameOver'


class Memorygame extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      missmatches: 0,
      gameOverCounter: 0,
      firstClick: '',
      firstClickName: '',
      secondClick: '',
      secondClickName: ''
    }
    this.shuffle(this.state.animals);
  }

  clickHandler = (animal) => {
    if (this.state.click === 1) {
      this.setState(prevState => ({
        animals: prevState.animals.map(
          ani => ani.id === animal.id ? { ...ani, active: true } : ani
        ),
        firstClick: animal.id,
        firstClickName: animal.name
      }))
    } else {
      this.setState(prevState => ({
        animals: prevState.animals.map(
          ani => ani.id === animal.id ? { ...ani, active: true } : ani
        ),
        secondClick: animal.id,
        secondClickName: animal.name
      }))

      setTimeout(this.handleEndOfTurn, 650)
    }

    this.state.click === 1 ? this.setState({ click: 2 }) : this.setState({ click: 1 })
  }

  compareCards = () => {
    if (this.state.firstClick !== this.state.secondClick & this.state.firstClickName === this.state.secondClickName) {
      console.log('funktiota HIT kutsutaan!')
      this.hit(this.state.firstClickName)
    } else {
      this.setState({ missmatches: this.state.missmatches + 1 })
    }
  }

  handleEndOfTurn = () => {
    console.log('First = ' + this.state.firstClick + ' ' + this.state.firstClickName)
    console.log('Second = ' + this.state.secondClick + ' ' + this.state.secondClickName)
    this.compareCards()

    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.active === true ? { ...ani, active: false } : ani
      ),
      firstClick: 0,
      firstClickName: '',
      secondClick: 0,
      secondClickName: ''
    }))

  }

  hit = (animalName) => {
    const name = animalName;
    console.log('Jippii OSUMA! eläimeen : ' + name)
    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.name === name ? { ...ani, active: 'done' } : ani
      ),
      gameOverCounter: this.state.gameOverCounter + 1
      //since this reaches value of 8, pops up the GameOver Component 

    }))
    console.log('gameoverCounter: ' + this.state.gameOverCounter)

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

  render() {

    return (
      <div className="grid-container">
        <div className="wrapper">
          {console.log('React renderöi näkymän!')}
          {this.state.animals.map(animal => (
            <Cards
              key={animal.id}
              name={animal.name}
              active={animal.active}
              click={animal.active !== 'done' ? (() => this.clickHandler(animal)) : undefined} />
          ))}
        </div>

        {this.state.gameOverCounter === 8 && <MemorygameOver
          missmatches={this.state.missmatches} />}

      </div>
    )
  }

}
export default Memorygame;