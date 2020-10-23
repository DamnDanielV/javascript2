
function saludar(name) {
    console.log(arguments); // objeto implicito arguments, se refiere a todos los argumentos
    console.log("hello! " + name);
}

// la siguiente es la forma segura de definir una funcion al asignarla a una constante
// por lo que no puede ser reasignado (saludar2)
const saludar2 = function(name) {
    console.log("hello2! " + name);
}


const saludar3 = (name) => {
    console.log('hola flecha ' + name);
}

let nombre = 'Daniel';
// saludar(nombre, 22, true, 'otro');
// saludar2(nombre);
// saludar3(nombre);

const sumar = (a, b) => a + b;

const aleatorio = () => Math.random();

// console.log(sumar(1, 3));

// console.log(aleatorio());

// protips

//antes
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}

//despues de EcmaScript6

function crearPersona2(nombre, apellido) {
    return {nombre,apellido}; // al objeto no es necesario indicarle un par de valores si estos tienen el mismo nombre
}

const crearPersona3 = (nombre, apellido) => ({nombre, apellido}); // si se desea regresar un objeto(literal) en una funcion flecha se debe encerrar en parentesis ()

console.log(crearPersona('Daniel', 'Villalba'));
console.log(crearPersona2('Daniel', 'Villalba'));
console.log(crearPersona3('Daniel', 'Villalba'));

//rest (funciones de flecha)

const lista = (...args) => {return (args)};

const [palabra, number, boleano, hello] = lista('lit', 45, true, 'hello');
console.log({palabra, number, boleano, hello});


