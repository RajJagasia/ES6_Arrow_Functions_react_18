import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var numbers = [3, 56, 2, 48, 5];

ReactDOM.render(<App />, document.getElementById("root"));

// function square(x) {
//   return x * x;
// }
// const newNumber = numbers.map(function (x) {
//   return x * x;
// });

//Arrow Function
const newNumber = numbers.map((x) => {
  return x * x;
});
//can also remove the brackets if 1 parameter
// const newNumber2 = numbers.map(x => {
//   return x * x;
// });

//doesn't work when 2 parameters are there

const newNumber3 = numbers.map((x, y) => {
  return x * y;
});

//we can also do this bs
const newNumber4 = numbers.map((x, y) => x * y);
const newNumber5 = numbers.map((x) => x * x);

////Map -Create a new array by doing something with each item in an array.
const newNumbers1 = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
const newNumbers4 = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex((num) => num > 10);
