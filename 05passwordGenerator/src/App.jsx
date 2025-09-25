import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(specialChar) str += "!@#$%^&*~";

    for(let i = 1; i <= length; i++){
      let idx = Math.floor(Math.random()* str.length);
      pass += str.charAt(idx);

    }

    setPassword(pass);

  }, [length, number, specialChar]);

  const copyPasswordToClipboard = useCallback(() =>{

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password); // To copy to clipboard

  }, [password])

  useEffect(() =>{

    passwordGenerator();

  }, [length, number, specialChar, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md shadow-md px-4 py-3 my-8 bg-gray-800 text-orange-500 text-center rounded-lg mx-auto'>

        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>

          <input className='bg-white outline-none w-full py-1 px-3' 
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder='Password' />
          <button className='outline-none px-3 py-2 bg-blue-700 text-white'
            onClick={copyPasswordToClipboard}
          >copy</button>

        </div>

        <div className='flex text-md gap-x-2 pt-3 pb-3'>
          
          <div className='flex items-center gap-x-2'>

            
          <input className='cursor-pointer' type="range" 
            min={8}
            max={100}
            value={length} // This basically reads the state ( whatever has been done by the user)
            onChange={(e) => setLength(e.target.value)} // e - event object that contains the information about the change that just happened
            // target - refers to the DOM element 
          />
          <label htmlFor="">Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" 
              defaultChecked = {number}
              onChange={() =>{
              setNumber((prev) => !prev); // on the basis of prev state it changes the current state
              }}
            />
            <label htmlFor="">Number</label>

          </div>
          <div className='flex items-center gap-x-1'>

            <input type="checkbox"
              
              defaultChecked = {specialChar}
              onChange = {() =>{
                setSpecialChar((prev) => !prev)
              }}
            />
            <label htmlFor="">Characters</label>

          </div>

        </div>

      </div>

    </>
  )

}

export default App
