import { useState } from "react";

/* For this button, we want the value of anger to go from 0 to 1 by increments of 0.1, and once we go over 1, reset it to zero. We need to use the value of anger in two places:

  1. for the background color of the button, and
  2. as a condition that will determine which message is displayed. 
*/
function AngryButton(props){
  const [anger, setAnger] = useState(0);
  return (
    <button style={{backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
        {anger < 1 && <span>Don't click me too much! </span>}
        { anger > 1 && <span>Rawr!</span>}
      </button>
  );
}

export default AngryButton; 