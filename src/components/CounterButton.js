import { useState } from "react";

/* 
We want the value of clickAmount to start at 0 and increment by 1 with each click. 
We want to use the value of clickAmount in the text of the button.

Replace the value of the placeholder with the value of the clickAmount state
*/


function CounterButton(props){
    const [clickAmount, setClickAmount] = useState(0);
    return (
      <button className="CounterButton">
        You clicked me {clickAmount} times
      </button>
    );
  }

  export default CounterButton;