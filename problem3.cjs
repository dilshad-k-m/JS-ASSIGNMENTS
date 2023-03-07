// defining and exporting the function 'sol' that returns the array of cars with model name sorted
module.exports = function sol(x) {
    const y = [];
    //iterating through the array x and adding all the model names in array 'y'
    for (let i = 0; i <x.length; i++) {
        y.push(x[i].car_model);
    }
    // sorting array 'y'
    y.sort();
    return y;
}