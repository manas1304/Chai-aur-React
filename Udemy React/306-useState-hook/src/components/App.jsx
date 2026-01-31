import React from "react";
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="button" onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default App;
