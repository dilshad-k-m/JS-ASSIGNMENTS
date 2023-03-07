// Importing the car array
const x = require("../cars.js");
// Importing 'sol' function from problem6.js
const sol = require("../problem6.cjs");
const y = sol(x);
// printing results into the console
for (let i=0; i<y.length ; i++) {
    console.log(JSON.stringify(y[i]));
}