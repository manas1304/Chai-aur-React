import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(info) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{info.name}</h2>
        <Avatar
          img={info.img}
          //props.img ={contacts[0].imgURL}
          // contacts array mein 1st object ki imgURL is the key and it's value is some link
        />
      </div>
      <div className="bottom">
        <Details
          detailInfo={info.tel}
        />
        <Details 
          detailInfo={info.email}
        />
      </div>
    </div>
  );
}

export default Card;
