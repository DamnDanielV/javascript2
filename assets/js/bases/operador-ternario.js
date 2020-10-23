'use strict'

let dia = 3,
    hractual = 10,
    horaApertura,
    mensaje;

horaApertura = ([0, 6].includes(dia)) ? 9: 11;

mensaje = (hractual >= horaApertura) ? "Esta abierto" : `Está cerrado, hora de apertura ${horaApertura}`;

console.log({horaApertura, mensaje});


//pro tip ternarios

//ternarios anidados

const nota = 78;

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});