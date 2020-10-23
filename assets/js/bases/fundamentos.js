// en javascript todo es un objeto excepto los primitivos


let a = 15;

  
let arr = [true, 123, 'daniel', function(){}, () => {}, ['hola', 'mundo', 'javascript']];

// console.log(arr[5][1]);

// console.log('longuitud: ', arr.length);

// arr.forEach((elemento, indice) => {console.log(elemento, indice)});

// objetos literales (diccionarios en Python)

let personaje = {
    nombre: 'tony stark',
    codeNane: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ["Mark I", 'Mark V']
};

console.log(personaje.trajes.length);

const x = 'vivo';
console.log(personaje[x]); // forma dinamica de buscar una key en un literal

delete personaje.edad; // eliminar una propiedad

console.log(personaje);

const entriesPairs = Object.entries(personaje); // dividir el objeto literal en un array key value
console.log(entriesPairs);
Object.freeze(personaje); // congela un objeto literal(no deja añadir o modificar propiedades)
personaje.estado = 'casado'; // añadir una caracteriztica

Object.getOwnPropertyNames(personajes); // obtiene las keys
Object.values(personaje); // obtiene los valores

