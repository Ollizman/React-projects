// periaatteessa korvaa life cycle metodit:
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects? use effect esim:
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from 'react'




function Hooktest() {
    const [answer] = useState('No')
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('')
    
    function consoleJsPractises () {
    const jsTesting = [0.1, 55, 3, 8.62, -6, -61, 7]
    //js tehtävä: poimi arraystä Pos. kokonaisluvut ja palauta ne arrayssä neliöiksi muutettuna.

    const newArray = jsTesting.filter(num => Number.isInteger(num) && num > 0).map(num => num*num)

    console.log(newArray)

    const plussalasku = function (x, y=1) {
        return x + y;
    }
    console.log(plussalasku(5));
    console.log(plussalasku(5,60));

    }



    function randColor() {
        let x = Math.floor(Math.random() * 5);
        let y = ['green', 'blue', 'yellow', 'brown', 'black']
        return y[x]
    }

    function addOne() {
        setCounter(prevState => prevState + 1)
    }

    // useEffect(() => {
    //    const timer = setInterval(() => {
    //         addOne()
    //     }, 1000)
        
    //     return () => clearInterval(timer)
    // }, [])

    useEffect(() => {
        setColor(randColor())
    }, [counter])

    return (
        <div>
            <h1>Is is really you? {answer}</h1>
            <h2 style={{ color: color }}>Counter: {counter}</h2>
            <button onClick={addOne}>Nappi</button>

            <button onClick = {consoleJsPractises}>JS loggaukset!</button>

        </div>
    )
}
export default Hooktest

  // let divStyles = {
    //     color:'blue',
    //     width: '25px',
    //     heigth: '20px'
    // }