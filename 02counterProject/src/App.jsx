import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);

  const addValue = () => {

    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter)
    

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button>
      <br />
      <button>Subtract Value {counter}</button>

      <p>Footer: {counter}</p>

    </>
  )
}

export default App
