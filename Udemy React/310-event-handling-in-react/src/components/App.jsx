import React from "react";
import {useState} from 'react';

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver(){
    setIsMouseOver(true);
  }
  function handleMouseOut(){
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{backgroundColor: isMouseOver? "black": "white"}}
      >Submit</button>
    </div>
  );
}

export default App;
