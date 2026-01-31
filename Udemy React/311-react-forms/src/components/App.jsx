import React from "react";
import {useState} from 'react';

function App() {
  const [text, setText] = useState("")
  const [headingText, setHeadingText] = useState("")
  function handleChange(e){
    setText(e.target.value)
  }
  function handleClick(){
    setHeadingText(text)
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input onChange={handleChange}  type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
