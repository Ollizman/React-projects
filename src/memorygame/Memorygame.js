import React, { Component } from 'react';
import './Memorygame.css';
import Card from './Card';
import MemorygameOver from './MemorygameOver'

const IMG_BASE_URL = 'https://cdn.pixabay.com/photo/'

const animals = [
  { name: 'dog', url: '2018/03/31/06/31/dog-3277417__340.jpg' },
  { name: 'cat', url: '2017/04/30/18/33/cat-2273598__340.jpg' },
  { name: 'horse', url: '2017/10/31/07/49/horses-2904536__340.jpg' },
  { name: 'snake', url: '2014/04/03/11/55/snake-312561__340.png' },
  { name: 'elephant', url: '2016/05/28/08/32/elephant-1421167_960_720.jpg' },
  { name: 'mouse', url: '2016/10/01/19/20/mouse-1708177__340.jpg' },
  { name: 'lion', url: '2019/11/06/06/00/lion-4605253__340.jpg' },
  { name: 'giraffe', url: '2018/10/28/11/18/giraffe-3778536__340.jpg' }
]

class Memorygame extends Component {
  constructor(props) {
    super(props);
    const animalsToState = animals.reduce((acc, animal, index) => {
      let newAnimals = [...acc,
      { id: index, name: animal.name, active: false, url: IMG_BASE_URL + animal.url },
      { id: 999 + index, name: animal.name, active: false, url: IMG_BASE_URL + animal.url }
      ]
      return newAnimals
    }, [])

    this.state = {
      animals: animalsToState,
      firstClickId: 0,
      firstClickName: '',
      secondClickId: 0,
      secondClickName: '',
      click: 1,
      missmatches: 0,
      gameOverCounter: 0,
    }

    this.shuffle(this.state.animals);
  }

  clickHandler = animal => {
    const { id, name, active } = animal
    const { click, secondClickId } = this.state
      // if the animal is paired, the name substate has been changed to 'done'
    if (name === 'done' || active === true || secondClickId !== 0) { 
      return
    }

    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.id === id ? { ...ani, active: true } : ani
      ),
    }))
    if (click === 1) {
      this.setState({
        firstClickId: id,
        firstClickName: name,
        click: 2
      })
      return
    } else {
      this.setState({
        secondClickId: id,
        secondClickName: name,
        click: 1
      })
      setTimeout(this.handleEndOfTurn, 750)
    }
  }

  compareCards = () => {
    const { missmatches, firstClickId, secondClickId, firstClickName, secondClickName } = this.state
    if (firstClickId !== secondClickId & firstClickName === secondClickName) {
      this.hit(firstClickName)
    } else {
      this.setState({ missmatches: missmatches + 1 })
    }
  }

  handleEndOfTurn = () => {
    this.compareCards()
    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.name !== 'done' && ani.active === true ? { ...ani, active: false } : ani
      ),
      firstClickId: 0,
      firstClickName: '',
      secondClickId: 0, //HUOM! clickhandler metodi ei toimi ellei tätä asetetea arvoon 0
      secondClickName: ''
    }))
  }

  hit = animalName => {
    const name = animalName
    const { gameOverCounter } = this.state
    console.log('Jippii OSUMA! eläimeen : ' + name)
    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.name === name ? { ...ani, name: 'done' } : ani
      ),
      gameOverCounter: gameOverCounter + 1
      //since this reaches value of 8, pops up the GameOver Component 

    }))
    console.log('gameoverCounter: ' + gameOverCounter)

  }

  shuffle = array => { //sekoittaa annetun arrayn järjestyksen!
    let currentIndex = array.length, temporaryValue, randomIndex;

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

  CardsToRender = () => this.state.animals.map(animal =>
    <Card
      key={animal.id}
      url={animal.url}
      name={animal.name}
      active={animal.active}
      click={() => this.clickHandler(animal)} />
  )

  render() {
    const { gameOverCounter, missmatches } = this.state
    console.log('React renderöi näkymän!')
    return (
      <div className="grid-container">
        <div className="wrapper">
          {this.CardsToRender()}
        </div>
        {gameOverCounter === 8 &&
          <MemorygameOver missmatches={missmatches} />
        }
      </div>
    )
  }

}
export default Memorygame;
