import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function handleChange(e){
    console.log(e.target.value)
    setColor(e.target.value);
  }
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-zinc-50 px-3 py-2 rounded-3xl">
            <button className="border px-4 py-2 text-black shadow-lg rounded-3xl" value="yellow" onClick={handleChange} style={{backgroundColor:"yellow"}} >Yellow</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="red" onClick={handleChange} style={{backgroundColor:"red", color: "white"}} >Red</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="orange" onClick={handleChange} style={{backgroundColor:"orange"}} >Orange</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="green" onClick={handleChange} style={{backgroundColor:"green", color: "white"}} >Green</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="blue" onClick={handleChange} style={{backgroundColor:"blue", color: "white"}} >Blue</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="olive" onClick={handleChange} style={{backgroundColor:"olive", color: "white"}} >Olive</button>
            <button className="border px-4 py-2 text-black shadow-lg rounded-3xl" value="pink" onClick={handleChange} style={{backgroundColor:"pink"}} >Pink</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="purple" onClick={handleChange} style={{backgroundColor:"purple", color: "white"}} >Purple</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="gray" onClick={handleChange} style={{backgroundColor:"gray", color: "white"}} >Gray</button>
            <button className="border px-4 py-2 text-black shadow-lg rounded-3xl" value="white" onClick={handleChange} style={{backgroundColor:"white"}} >White</button>
            <button className="border px-4 py-2 text-white shadow-lg rounded-3xl" value="black"onClick={handleChange} style={{backgroundColor:"black", color: "white"}} >Black</button>
            <button className="border px-4 py-2 text-black shadow-lg rounded-3xl" value="lavender" onClick={handleChange} style={{backgroundColor:"lavender"}} >Lavender</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
