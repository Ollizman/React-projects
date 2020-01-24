import React from "react";
import useSpeedTyping from "./useSpeedTyping";
import "./Typinggame.css";
import RandomWords from "./RandomWords";

const TypinggameUI = () => {
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
    changeTimer,
    ON,
    OFF,
    textRef
  } = useSpeedTyping();

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
      </button>{" "}
      <br />
      <button onClick={changeTimer} disabled={start === ON}>
        30/60
      </button>
      <RandomWords />
    </div>
  );
};
export default TypinggameUI;
