// Declaring a function that returns all the years of car
module.exports = function sol(x) {
    const y = [];
    // iterating through cars array
    for (let i=0; i < x.length; i++) {
        y.push(x[i].car_year);
    }
    return y;
};