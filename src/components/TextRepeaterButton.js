import { useState } from "react";

/*
Store an array of <span> elements and render them based on the value of repetitions.

Create a loop that will store as many <span>I like this text</span> elements that are necessary based on the value of repetitions
Place the array in the JSX to show those span elements inside the button.
*/

function TextRepeaterButton(props){
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }
  return (
    <button className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;