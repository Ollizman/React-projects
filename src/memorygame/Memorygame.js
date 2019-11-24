import React, { Component } from 'react';
import './Memorygame.css';
import Card from './Card';
import MemorygameOver from './MemorygameOver'

const IMG_BASE_URL = 'https://cdn.pixabay.com/photo/'
const FOUND = 1
const NOTFOUND = 0

const animals = [
  { name: 'dog', found: NOTFOUND, url: '2018/03/31/06/31/dog-3277417__340.jpg' },
  { name: 'cat', found: NOTFOUND, url: '2017/04/30/18/33/cat-2273598__340.jpg' },
  { name: 'horse', found: NOTFOUND, url: '2017/10/31/07/49/horses-2904536__340.jpg' },
  { name: 'snake', found: NOTFOUND, url: '2014/04/03/11/55/snake-312561__340.png' },
  { name: 'elephant', found: NOTFOUND, url: '2016/05/28/08/32/elephant-1421167_960_720.jpg' },
  { name: 'mouse', found: NOTFOUND, url: '2016/10/01/19/20/mouse-1708177__340.jpg' },
  { name: 'lion', found: NOTFOUND, url: '2019/11/06/06/00/lion-4605253__340.jpg' },
  { name: 'giraffe', found: NOTFOUND, url: '2018/10/28/11/18/giraffe-3778536__340.jpg' }
]

class Memorygame extends Component {
  constructor(props) {
    super(props);
    const animalsToState = animals.reduce((acc, animal, index) => {
      let newAnimals = [...acc,
      { id: index, name: animal.name, found: animal.found, active: false, url: IMG_BASE_URL + animal.url },
      { id: 999 + index, name: animal.name, found: animal.found, active: false, url: IMG_BASE_URL + animal.url }
      ]
      return newAnimals
    }, [])

    this.state = {
      animals: animalsToState,
      firstClickName: '',
      secondClickName: '',
      click: 1,
      missmatches: 0,
      matches: 0,
    }    
    this.shuffle(this.state.animals);
  }

  clickHandler = animal => {
    const { id, name, found, active } = animal
    const { click, secondClickName } = this.state
    // if the animal is paired, the found substate has been changed to 'FOUND' (=1)
    if (found === FOUND || active === true || secondClickName !== '') {
      return
    }

    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.id === id ? { ...ani, active: true } : ani
      ),
    }))
    if (click === 1) {
      this.setState({
        firstClickName: name,
        click: 2
      })
      return
    } else { //..click === 2 ..
      this.setState({
        secondClickName: name,
        click: 1
      })
      setTimeout(this.handleEndOfTurn, 750)
    }
  }

  compareCards = () => {
    const { missmatches, firstClickName, secondClickName } = this.state
    firstClickName === secondClickName ? this.hit(firstClickName)
    : this.setState({ missmatches: missmatches + 1 })
  }

  handleEndOfTurn = () => {
    this.compareCards()
    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.found !== FOUND && ani.active === true ? { ...ani, active: false } : ani
      ),
      firstClickName: '',
      secondClickName: '' //HUOM! clickhandler metodi ei toimi ellei tätä aseteta arvoon ''
    }))
  }

  hit = animalName => {
    const name = animalName
    const { matches } = this.state
    console.log('Jippii OSUMA! eläimeen : ' + name)

    this.setState(prevState => ({
      animals: prevState.animals.map(
        ani => ani.name === name ? { ...ani, found: FOUND } : ani
      ),
      matches: matches + 1  //since this reaches value of 8, pops up the GameOver Component 
    }))
    console.log('matches: ' + matches)
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
      found={animal.found}
      active={animal.active}
      click={() => this.clickHandler(animal)} />
  )

  render() {
    const { matches, missmatches } = this.state
    console.log('React renderöi näkymän!')
    return (
      <div className="grid-container">
        <div className="wrapper">
          {this.CardsToRender()}
        </div>
        {matches === 8 &&
          <MemorygameOver missmatches={missmatches} />
        }
      </div>
    )
  }

}
export default Memorygame;
