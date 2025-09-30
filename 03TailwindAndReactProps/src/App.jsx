import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded mb-4'>Tailwind Test</h1>

      <Card userName = "FrontEnd Developer" btnText = "Apply for Frontend"/ >
      <Card userName = "Backend Developer" btnText = "Apply for Backend"/>

    </>
  )
}

export default App
