import React, {useState} from "react";

function App() {
  setInterval(updateTime, 1000)
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }
  return (
    <div className="container">
      <h1>{time}</h1> 
      {/* here the value of currentTime is put in time and shown in the UI */}
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
