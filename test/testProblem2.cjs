// importing the cars.js for car information
const x = require("../cars.js");
// importing the function sol from problem2.cjs
const sol = require("../problem2.cjs");
// 
const y = sol(x);
console.log(`Last car is a ${y.car_make} ${y.car_model}`);