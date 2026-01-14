import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2026,1,1, 12);
console.log(date);
const currentTime = date.getHours();
console.log(currentTime);
let greeting;
function check(){
    if(currentTime < 12){
        greeting = "Good Morning"
        customStyle.color = 'red'
    }else if(currentTime < 18){
        greeting = "Good Afternoon"
        customStyle.color = 'green'
    }else{
        greeting = "Good Night"
        customStyle.color = 'blue'
    }
}

const customStyle = {
    color: ""
}

ReactDOM.render(
    <h1 onSubmit={check()} style={customStyle}>{greeting}</h1>,
    document.getElementById('root')
)


/**
 * Show a single h1 that says 
 * Good morning - If between midnight to 12 PM
 * Good afternoon - If between 12 PM to 6PM
 * Good evening -- If between 6PM to midnight
 * Apply the "heading" styles to the styles.css
 * Dynamically change the color of the h1 using css
 * Morning = red, afternoon = green, evening= blue
 */

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
