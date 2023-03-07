// importing the cars.js for getting car array
const x = require("../cars.js");
// importing 'sol' function from problem3.cjs
const sol = require("../problem3.cjs");
// storing the model names sorted
const y = sol(x);
// loging the result
for (let i=0; i< y.length; i++){
    console.log(y[i]+ "\n");
}