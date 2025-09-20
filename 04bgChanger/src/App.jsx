import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("olive");

  return (
    <>

      <div className="w-full h-screen" style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 bg-zinc-50 px-3 py-2 rounded-3xl">

              <button onClick={() => setColor("red")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"red"}}>Red</button>
              <button onClick={() => setColor("yellow")} className="border px-4 py-2 text-black shadow-lg rounded-3xl" style={{backgroundColor:"yellow"}}>Yellow</button>
              <button onClick={() => setColor("orange")} className="border px-4 py-2 text-black shadow-lg rounded-3xl" style={{backgroundColor:"orange"}}>Orange</button>
              <button onClick={() => setColor("green")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"green"}}>Green</button>
              <button onClick={() => setColor("blue")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"blue"}}>Blue</button>
              <button onClick={() => setColor("olive")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"olive"}}>Olive</button>
              <button onClick={() => setColor("pink")} className="border px-4 py-2 text-black shadow-lg rounded-3xl" style={{backgroundColor:"pink"}}>Pink</button>
              <button onClick={() => setColor("purple")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"purple"}}>Purple</button>
              <button onClick={() => setColor("gray")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"gray"}}>Gray</button>
              <button onClick={() => setColor("white")} className="border px-4 py-2 text-black shadow-lg rounded-3xl" style={{backgroundColor:"white"}}>White</button>
              <button onClick={() => setColor("black")} className="border px-4 py-2 text-white shadow-lg rounded-3xl" style={{backgroundColor:"black"}}>Black</button>
              <button onClick={() => setColor("lavender")} className="border px-4 py-2 text-black shadow-lg rounded-3xl" style={{backgroundColor:"lavender"}}>Lavender</button>

          </div>

        </div>

      </div>
      
    </>
  )
}
 
export default App

