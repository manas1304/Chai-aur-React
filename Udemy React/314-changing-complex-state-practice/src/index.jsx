import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const citrus = ["Lime", "Lemon", "Orange"]
const fruits = ["Apple", "Banana", ...citrus];
// console.log(citrus)
// console.log(fruits)

const fullName = {
    fname: "James",
    lname: "Bond"
};

const user = {
    ...fullName,
    id: "1",
    userName:"jamesbond007"

}
const user1 = {
    fullName,
    id: "1",
    userName:"jamesbond007"

}

console.log(user) // Field seprately included
console.log(user1) // fullname - as object comes 
