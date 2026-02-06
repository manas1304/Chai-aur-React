import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    textArea: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    // console.log(event.target.name);
    setNote((prevNote) =>{
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e){
    e.preventDefault()
    props.onAdd(note)
  }
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
