import React, {useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]); // items is currently an empty array.....

  function handleChange(e){
    setInputText(e.target.value)
    console.log(e.target.value)
  }

  function addItem(){
    console.log(items);
    setItems((prevValue) =>{
      return [
        ...prevValue,
        inputText
      ]
    })
    setInputText("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}  type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map((item) =>(
               <li>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
