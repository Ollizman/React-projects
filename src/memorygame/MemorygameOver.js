import React from "react";
import "./MemorygameOver.css";
import { Link } from "react-router-dom";

const MemorygameOver = props => {
  console.log(props);
  return (
    <div id="overlay">
      <div className="gameoverbox">
        <h3>Completed! You Matched em all! </h3>
        <p>..with {props.missmatches} missmatches! =) </p>
        <Link to="/projects">
          <button id="closeButton"> Close </button>
        </Link>
      </div>
    </div>
  );
};

export default MemorygameOver;
