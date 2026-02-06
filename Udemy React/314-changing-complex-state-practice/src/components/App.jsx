import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(e){

    const {value, name}= e.target;
    // I just want to get hold of the value and name properties from the e.target object which has other properties as well like
    // placeholder, preventDefault etc


    setContact((prevValue) =>{
      
      return {
        ...prevValue,
        [name]: value
      }
    })

    // setContact((prevValue) =>{
    //   console.log(prevValue);
    //   if(name === 'fName'){
    //     return {
    //       fName: value,
    //       lName: prevValue.lName
    //     }
    //   }else if(name === 'lName'){
    //     return {
    //       fName: prevValue.fName,
    //       lName: value
    //     }
    //   }else{
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value
    //     }
    //   }
    // })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
