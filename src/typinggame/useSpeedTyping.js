import { useState, useEffect, useRef } from "react";

const ON = true;
const OFF = false;
const TIMER = 30; // starting time

const useSpeedTyping = () => {
  const [text, setText] = useState("");
  const [timeCounter, setTimeCounter] = useState(TIMER);
  const [start, setStart] = useState(OFF);
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [color, setColor] = useState("");
  const [gameOver, setGameOver] = useState(true);
  const textRef = useRef(null);

  const handleChange = e => {
    const value = e.target.value;
    setText(value);
    setChars(value.length);
    setWords(wordCount(text));
  };

  useEffect(() => {
    if (!start) return;

    if (timeCounter > 0) {
      setTimeout(() => {
        setTimeCounter(prevState => prevState - 1);
      }, 1000);
    }
    timeCounter > 4
      ? setColor(randCol)
      : timeCounter > 0
      ? setColor("yellow")
      : setGameOver(true);
  }, [start, timeCounter]);

  const randCol = () => {
    const colors = ["green", "red", "blue", "white", "yellow"];
    return colors[Math.floor(Math.random() * 5)];
  };

  const wordCount = str => {
    const wordsArr = str.trim().split(" ");
    return wordsArr.filter(word => {
      return word !== "" && word.length > 1;
    }).length;
  };

  const changeTimer = () =>
    timeCounter === 60 ? setTimeCounter(30) : setTimeCounter(60);

  const startGame = () => {
    setStart(ON);
    setGameOver(false);
    setText("");
    setWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const stopGame = () => {
    if (!gameOver || !start) return;
    setStart(OFF);
    setTimeout(() => {
      setTimeCounter(TIMER);
      alert(`You wrote ${words} words in ${TIMER} seconds!
      ..and includes total of ${chars} characters (incl.spaces)`);
    }, 999);
  };

  useEffect(stopGame, [gameOver]);

  return {
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
  };
};

export default useSpeedTyping;
