import React, { useState } from 'react'
import Card from './Card'
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
        const {id, name} = animal

        if(name === 'done') return

        setAnimals(animals.map(ani => ani.id === id ? {...ani, active:true} : ani))
        console.log(animal)
        
        if (click === 1 ) {
            setClick(2)
            return
        } else {
            const Active = animals.filter(ani => ani.active === true)
           
           Active[0].name === name && Active[0].id !== id ? match(animal) : missedMatch()
            setClick(1)
            setTimeout(() => setAnimals(animals.map(ani => ani.name !== 'done' ? {...ani, active:false} : ani)),800)
        }
    }

    const match = (animal) => {     
      setAnimals(animals.map(ani => ani.name === animal.name ? {...ani, name:'done', active:true} : ani))
    }

    const missedMatch = () => {
        setMissmatch(missmatch + 1)
    }

    return (
        <div className="grid-container">
            <div className="wrapper">

                {animals.map(animal => (
                    <Card
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