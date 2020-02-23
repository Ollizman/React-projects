import React, { useState, useEffect } from "react";
import "./Typinggame.css";
import { Button } from "../Buttons";

const BASE_API_URL = "https://random-word-api.herokuapp.com/";
const API_KEY = "62URKTA8";
const ERROR_MSG =
  "Api key must be updated first in the code.. Use your imagination to imagine here some random words and use them instead. Or maybe not imagine the words here at all, just imagine them in your mind and push them away to the screen through your fingers!";

const RandomWords = () => {
  const [randWords, setRandWords] = useState([]);
  const [showRandWords, setShowRandWords] = useState(false);

  useEffect(() => {
    if (!showRandWords) return;
    fetch(`${BASE_API_URL}/word?key=${API_KEY}&number=200`)
      .then(response => response.json())
      .then(response => {
        if (response === "wrong API key") {
          setRandWords(`Sorry! ${response} --${ERROR_MSG}`);
        }
      })
      .catch(error => {
        setRandWords(`Sorry! ${error} --${ERROR_MSG}`);
      });
  }, [showRandWords]);

  return (
    <>
      <Button
        onClick={() =>
          !showRandWords ? setShowRandWords(true) : setShowRandWords(false)
        }
        style={{ textAlign: "left", display: "flex" }}
      >
        {!showRandWords ? "Get" : "Hide"} example words!
      </Button>
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
    </>
  );
};
export default RandomWords;
