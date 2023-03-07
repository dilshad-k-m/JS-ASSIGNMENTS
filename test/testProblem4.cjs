// Importing array of cars
const x = require("../cars.js");
// Importing the 'sol' from problem4.cjs
const sol = require("../problem4.cjs");
// storing the array of all years
const y = sol(x);
// printing the result
for (let i=0; i<y.length;i++) {
    console.log(y[i] +"\n");
}