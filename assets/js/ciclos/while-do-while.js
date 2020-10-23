'use strict'

const cars = ['ford', 'toyot', 'audi', 'chevrolet'];

let i = 0;

// while
while(cars[i]) {
    if (i === 1) {
        i++;
        continue; // se salta un ciclo pero no se sale del ciclo a diferencia de break que rompe el ciclo
    }
    console.log(cars[i]);
    i++;
}

// do while

console.log("======== do while ======");
let j = 0;
do {
    console.log(cars[i]);
    i++;
} while (cars[j]);