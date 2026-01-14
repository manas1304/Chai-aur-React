//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from 'react';
import ReactDOM from 'react-dom';
const yourname = 'Manas';
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);

const imageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87g3RDKALdKYIfCXkEOhnlZvipSU9cLO7EQ&s"

ReactDOM.render(
    <div>
        <p>Created by {yourname}</p>
        <p>CopyRight {year}</p>
        <img src={imageLink} />
    </div>,
    document.getElementById('root')
)
