import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);

  const addValue = () => {

    console.log("clicked", counter);
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    

  }

  const subtractValue = () =>{

    console.log("clicked", counter);
    setCounter(counter - 1);
    

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button>
      <br />
      <button onClick={subtractValue}>Subtract Value {counter}</button>

      <p>Footer: {counter}</p>

    </>
  )
}

export default App
