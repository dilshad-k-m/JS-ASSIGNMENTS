// creating a function that returns old cars
module.exports = function sol(x) {
    const y = [];
    //iterating through the array and add the years before 2000
    for (let i=0; i<x.length;i++) {
        if (x[i]<2000) {
            y.push(x[i]);
        }
    }
    return [y, y.length];
};