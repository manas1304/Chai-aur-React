// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';
import animals from './data'

const [honda, tesla] = cars;

// const{model,coloursByPopularity: [teslaTopColour],speedStats: {teslaTopSpeed}} = honda
// console.log(coloursByPopularity)

const {speedStats: {topSpeed: hondaTopSpeed}} = honda
const {speedStats: {topSpeed: teslaTopSpeed},} = tesla

const {coloursByPopularity: [hondaTopColour]} = honda

const {coloursByPopularity: [teslaTopColour]} = tesla
// console.log(honda)
// console.log(tesla)

// const {teslaModel, coloursByPopularity: [teslaTopColour, teslaSecondColour], speedStats: {teslaTopSpeed, teslaZeroToSixty}} = tesla
// const {hondaModel, coloursByPopularity: [hondaTopColour, hondaSecondColour], speedStats: {hondaTopSpeed, hondaZeroToSixty}} = honda

// console.log(animals) // array of objects

// const [cat, dog ] = animals;
// console.log(cat) // a single object

// // const {name, sound} = cat;
// // console.log(sound) // key inside the object - value printed

// const {name, sound, foodRequirements: {food, water}} = cat;
// console.log(food)

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
