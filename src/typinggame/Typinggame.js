import React, { useState, useEffect } from "react";
import "./Typinggame.css";
import useSpeedTyping from "./useSpeedTyping";

const TIMER = "15"; //set timer for the game(seconds)
const BASE_API_URL = "https://random-word-api.herokuapp.com/";
const API_KEY = "62URKTA8";

const Typinggame = () => {
  const [randWords, setRandWords] = useState([]);
  const [showRandWords, setShowRandWords] = useState(false);

  const {
    text,
    timeCounter,
    start,
    words,
    color,
    gameOver,
    setGameOver,
    startGame,
    handleChange,
    ON,
    OFF,
    textRef
  } = useSpeedTyping(TIMER);

  useEffect(() => {
    if (!showRandWords) return;
    fetch(`${BASE_API_URL}/word?key=${API_KEY}&number=200`)
      .then(response => response.json())
      .then(response => {
        setRandWords(response);
        console.log(response);
      });
  }, [showRandWords]);

  return (
    <div className="Typinggame">
      <h1>Speed Typing game</h1>
      <textarea
        ref={textRef}
        placeholder='Start typing after clicking "start" button!!'
        value={text}
        name="text"
        onChange={handleChange}
        disabled={gameOver}
      />
      <h4>Word count: {words}</h4>
      <h4 style={{ color: !gameOver ? color : "#ff4444" }}>
        Time left: {timeCounter}
      </h4>
      <button className="button" onClick={startGame} disabled={start === ON}>
        Start
      </button>
      <button
        className="button"
        onClick={() => setGameOver(true)}
        disabled={start === OFF}
      >
        Stop
      </button>
      <button
        className="button"
        onClick={() =>
          !showRandWords ? setShowRandWords(true) : setShowRandWords(false)
        }
        style={{ textAlign: "left", display: "flex" }}
      >
        {!showRandWords ? "Get" : "Hide"} example words!
      </button>
      <textarea
        name="randWords"
        style={{
          display: !showRandWords ? "none" : "",
          height: "110px",
          background: "white",
          fontFamily: "arial",
          fontWeight: "bold"
        }}
        disabled={true}
        value={randWords}
      />
    </div>
  );
};

export default Typinggame;
