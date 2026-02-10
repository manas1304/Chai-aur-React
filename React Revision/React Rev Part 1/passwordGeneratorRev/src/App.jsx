import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass=""
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(char) str += "`!@#$%^&*"

    for(let i = 1; i <= length; i++){
      let idx = Math.floor(Math.random()* str.length)
      pass += str.charAt(idx)
    }

    setPassword(pass)
  }, [length, number, char])

  useEffect(() =>{
    passwordGenerator()
  }, [length, char, number])

  return (
    <>
      
      <div className='w-full max-w-md shadow-md px-4 py-3 my-8 bg-gray-800 text-orange-500 text-center rounded-lg mx-auto'>

        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>

          <input className='bg-white outline-none w-full py-1 px-3' 
            type="text"
            value={password}
            readOnly
            placeholder='Password' />
          <button className='outline-none px-3 py-2 bg-blue-700 text-white'
          >copy</button>

        </div>

        <div className='flex text-md gap-x-2 pt-3 pb-3'>
          
          <div className='flex items-center gap-x-2'>

            
          <input className='cursor-pointer' type="range"
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox"
              onChange={() => setNumber((prev) => !prev)}
              defaultChecked={number}
            />
            <label htmlFor="">Number</label>

          </div>
          <div className='flex items-center gap-x-1'>

            <input type="checkbox"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="">Characters</label>

          </div>

        </div>

      </div>

    </>
  )

}

export default App