//Exporting the module with function 'sol' that returns the car object with id 33
module.exports = function sol(x) {
    //Iterating through the array for getting required car details
    for (let i=0; i<x.length; i++) {
        if (x[i].id === 33) {
            return x[i];
        }
    }
};
