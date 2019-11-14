import React, { Component } from 'react';
import './Memorygame.css';
import Cards from './Cards';
import MemorygameOver from './MemorygameOver'

const IMG_BASE_URL = 'https://cdn.pixabay.com/'

const animals = [
  { name: 'dog', url: 'photo/2018/03/31/06/31/dog-3277417__340.jpg' },
  { name: 'cat', url: 'photo/2017/04/30/18/33/cat-2273598__340.jpg' },
  { name: 'horse', url: 'photo/2017/10/31/07/49/horses-2904536__340.jpg' },
  { name: 'snake', url: 'photo/2014/04/03/11/55/snake-312561__340.png' },
  { name: 'elephant', url: 'photo/2016/05/28/08/32/elephant-1421167_960_720.jpg' },
  { name: 'mouse', url: 'photo/2016/10/01/19/20/mouse-1708177__340.jpg' },
  { name: 'lion', url: 'photo/2019/11/06/06/00/lion-4605253__340.jpg' },
  { name: 'giraffe', url: 'photo/2018/10/28/11/18/giraffe-3778536__340.jpg' }
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
      firstClickId: '',
      firstClickName: '',
      secondClickId: '',
      secondClickName: '',
      click: 1,
      missmatches: 0,
      gameOverCounter: 0,
    }

    this.shuffle(this.state.animals);
  }

  
  clickHandler = animal => {
    const { id, name } = animal
    const { click } = this.state

    if (name === 'done') {
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
      setTimeout(this.handleEndOfTurn, 650)
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
      secondClickId: 0,
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
    <Cards
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

/*

  addPhotos = () => {
    const {animals} = this.state
     console.log(animals)
    const annimals =
      {
        dog: 'photo/2018/03/31/06/31/dog-3277417__340.jpg',
        cat: 'photo/2017/04/30/18/33/cat-2273598__340.jpg',
        horse: 'photo/2017/10/31/07/49/horses-2904536__340.jpg',
        snake: 'photo/2014/04/03/11/55/snake-312561__340.png',
        elephant: 'photo/2016/05/28/08/32/elephant-1421167_960_720.jpg',
        mouse: 'photo/2016/10/01/19/20/mouse-1708177__340.jpg',
        lion: 'photo/2019/11/06/06/00/lion-4605253__340.jpg',
        giraffe: 'photo/2018/10/28/11/18/giraffe-3778536__340.jpg'
      }

      for (let key in annimals) {
        // console.log(key)
        // console.log(annimals[key])
        console.log(animals.name)
        animals.map(
          ani => key === ani.name && fetch(IMG_BASE_URL + annimals[key])
          .then(data => {

            console.log('hello')
            this.setState({
              animals: {...ani, url: data}
            })
          }))
        }
  }

*/