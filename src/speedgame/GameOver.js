import React from "react";
import "./GameOver.css";

const GameOver = props => {
  console.log(props);
  return (
    <div id="overlay">
      <div className="gameoverbox">
        <p>Game over!! Your final score is: {props.score}</p>
        <button id="closeButton" onClick={() => props.reFresh()}>
          {" "}
          Close{" "}
        </button>
      </div>
    </div>
  );
};

export default GameOver;
