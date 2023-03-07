// importing array from cars.js
const z = require("../cars.js");
// importing 'sol' from problem5.cjs
const sol = require("../problem5.cjs");
// importing array of years
const n = require("../problem4.cjs");
const m = n(z);
// storing the array of old cars;
const o = sol(m);
//printing the oldcar details
for (let i=0; i< o.length;i++) {
    console.log(o[i]+ "\n");
}