import React, { useState, useEffect } from "react";

function Hooktest() {
  const [answer] = useState("No");
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  function consoleJsPractises() {
    const jsTesting = [0.1, 55, 3, 8.62, -6, -61, 7];
    //js tehtava: poimi arraysta Pos. kokonaisluvut ja palauta ne arrayssa neliöiksi muutettuna.

    const newArray = jsTesting
      .filter(num => Number.isInteger(num) && num > 0)
      .map(num => num * num);

    console.log(newArray);

    const plussalasku = function(x, y = 1) {
      return x + y;
    };
    console.log(plussalasku(5));
    console.log(plussalasku(5, 60));

    const summer = (...args) => args.reduce((a, b) => a + b, 100);
    console.log(summer(1, 2, 3, 4, 5, 6));

    //lokin päällä lokki objektin sisalla toinen

    const lokki = {
      laululokki: { maara: 10, sijainti: "Eurooppa" },
      naurulokki: { maara: 90, sijainti: "Suomi" },
      harmaalokki: { maara: 120, sijainti: "Kanada" }
    };
    console.log("Harmaalokkien määrä on: ", lokki.harmaalokki.maara);
    const naurulokinSijainti = lokki => {
      const {
        naurulokki: { sijainti: naurulokinSijainti }
      } = lokki;
      return naurulokinSijainti;
    };
    console.log("naurulokin sijainti: " + naurulokinSijainti(lokki));
  }

  function randColor() {
    let x = Math.floor(Math.random() * 5);
    let y = ["green", "blue", "yellow", "brown", "black"];
    return y[x];
  }

  function addOne() {
    setCounter(prevState => prevState + 1);
  }

  useEffect(() => {
    setColor(randColor());
  }, [counter]);

  return (
    <div>
      <h1>Is is really you? {answer}</h1>
      <h2 style={{ color: color }}>Counter: {counter}</h2>
      <button onClick={addOne}>Nappi</button>
      <button onClick={consoleJsPractises}>JS loggaukset!</button>
    </div>
  );
}
export default Hooktest;
