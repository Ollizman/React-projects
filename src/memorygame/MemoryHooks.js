import React, { useState } from 'react'
import Cards from './Cards'
import './Memorygame.css'


function MemoryHooks() {
    const [click, setClick] = useState(1)
    const [animals, setAnimals] = useState([
        { id: 1, name: 'dog', active: false },
        { id: 2, name: 'horse', active: false },
        { id: 3, name: 'dog', active: false },
        { id: 4, name: 'horse', active: false }
    ])
    const [missmatch, setMissmatch] = useState(0)

    const clickHandler = (animal) => {
        setAnimals(animals.map(ani => ani.id === animal.id ? {...ani, active:true} : ani))
        console.log(animals) //jostain syystä ensimmäistä clickausta ei käsitellä samalla tavalla kuin muita.
        if (click === 1 ) {
            setClick(2)
            return
        } else {
            const clickedAnimals = animals.filter(ani => ani.active === true);
            console.log(clickedAnimals)
            if (clickedAnimals.length === 2 ) {
            clickedAnimals[0].name === clickedAnimals[1].name && clickedAnimals[0].id !== clickedAnimals[1].id
            ? match(clickedAnimals) : missedMatch() }
            setClick(1)
        }
    }

    const match = (animals) => {
      //korjattava varmasti setAnimals kautta et muuttaa statea.
        animals[0].active = 'done';
        animals[1].active = 'done';

    }

    const missedMatch = () => {
        setMissmatch(missmatch + 1)
    }

    return (
        <div className="grid-container">
            <div className="wrapper">

                {animals.map(animal => (
                    <Cards
                        key={animal.id}
                        name={animal.name}
                        active={animal.active}
                        click={animal.active !== 'done' ? (() => clickHandler(animal)) : undefined} />
                ))}

            </div>
        </div>
    )
}
export default MemoryHooks