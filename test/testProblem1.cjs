// importing array from cars.js
const x = require("../cars.js");
// importing the function sol from problem1.cjs
const sol = require("../problem1.cjs");
// getting the required car information
const z = sol(x);
console.log(`car 33 is a ${z.car_year} ${z.car_make} ${z.car_model}`)