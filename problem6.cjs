// defining the function that returns only Audi and BMW cars
module.exports = function sol(x) {
    const y=[];
    //iterating through the car array for the car information of Audi and BMW
    for(let i=0;i<x.length;i++) {
        if(x[i].car_make === 'BMW' || x[i].car_make === 'Audi'){
            y.push(x[i]);
        }
    }
    return y;
}