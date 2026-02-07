import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [arr, setArr] = useState([]);

  function addNote(note){
    setArr((prev) =>{
      return [
        ...prev,
        note
      ]
    })
  }

  function deleteItem(id){
    console.log("Delete function called")
    setArr((prev) =>{
      return prev.filter((note, index) =>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        arr.map((note, index) =>(
          <Note 
            title={note.title}
            content={note.content}
            key={index}
            id={index}
            onDelete={deleteItem}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
