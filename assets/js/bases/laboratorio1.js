'use strict'

let diasemana = {
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
    0: 'domingo'
};
const today = new Date();
let day = today.getDay();
console.log(diasemana[day]);

const arraydays = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log('dia usando arreglos', arraydays[day]);