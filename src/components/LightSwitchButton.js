import { useState } from "react";

/* 
For this button, we want to alternate between two states: on and off.
Based on the state, we want to show the appropriate text
Add conditional rendering to the the potential message of the button (light being on or off)
*/

function LightSwitchButton(props){
  const [light, setLight] = useState("off");
  /* condition ? exprIfTrue : exprIfFalse */
  const handleClick = () => setLight(light === "on" ? "off" : "on");
  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;