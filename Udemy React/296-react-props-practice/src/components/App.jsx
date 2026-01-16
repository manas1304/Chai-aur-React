import React from "react";
import Card from "./Card";
import contacts from '../contacts'

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
        name={contacts[0].name}
        email={contacts[0].email}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
      />
      <Card 
        name={contacts[1].name}
        email={contacts[1].email}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
      />
      <Card 
        name={contacts[2].name}
        email={contacts[2].email}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
      />
    </div>
  );
}

export default App;
