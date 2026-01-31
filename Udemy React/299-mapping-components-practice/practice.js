/** JS ES6 Map Filter Reduce.. */
import emojipedia from './src/emojipedia.js';

// var numbers = [3,56,2,48,5];

// function double(x){
//     return x*2;
// }

// const newNunbers = numbers.map(double);

// console.log(newNunbers);

const newArray = emojipedia.map(function (x){
    return x.meaning.substring(0,100);
})
console.log(newArray)