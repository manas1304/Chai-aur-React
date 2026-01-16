import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return (
    <div>
        <h2>{props.name}</h2>
      <img
        src={props.img}
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+9123957239853"
      email="beyonce@gmail.com"
      // These above 4 are properties of this card which will be passed as props in the Card component where it is created.
      // Here props would contain -- props.name, props.img, props.tel, props.email -- Properties of that specific card 
      // This makes card a Reusable component
    />
    <Card 
      name="Margot Robbie"
      img="https://sm.ign.com/ign_in/photo/1/10-best-ma/10-best-margot-robbie-movies_rsyd.jpg"
      tel="+9123957239853"
      email="margotrobbie@gmail.com"
    />
    <Card 
      name="Sharvari"
      img="https://img-mm.manoramaonline.com/content/dam/mm/mo/archive/web-stories/movies/images/2025/10/16/Sharvari-4.jpg"
      tel="+9123957239853"
      email="sharvari@gmail.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
