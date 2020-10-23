'use strict'
/**
 * 5C = Five of Clubs
 * 5S = Five of Spades
 * 5H = Five of Hearts
 * 5D = Five of Diamonds
 */

let deck = [];
let carta;
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'A', 'Q', 'K'];
let puntosJugador = 0;
let puntosComp = 0;
// referencias al HTML

const botonPedir = document.querySelector('#botonPedir');
const smalls = document.querySelectorAll('small');
const jugadorCartas = document.querySelector('#jugador-cartas');


/**
 * crearDeck - Crea un nuevo mazo de cartas aleatorio
 * @returns {list} mazo aleatorio
 */
const crearDeck = () => {
    for (let i = 2; i <= 10; i++)
        for (let tipo of tipos)
            deck.push(i + tipo);
    
    for (let tipo of tipos)
        for (let especial of especiales)
            deck.push(especial + tipo);
    
    deck = _.shuffle(deck); //using underscore library
    return deck;
}

deck = crearDeck();
console.log(deck);
/**
 * pedirCarta - extrae una carta del mazo
 * 
 */
const pedirCarta = () => {
    if (deck.length == 0) {
        throw("no hay mas cartas");
    }
    return deck.pop();
}

// console.log(carta);
// console.log(deck);

const valorCarta = (carta) => {
    let valor = [];
   //let puntos;
    valor = carta[1] != 0 ? carta.slice(0, 1) : carta.slice (0, 2);
    // if (carta[1] != 0)
    //     valor = carta.slice(0,1);
    // else
    //     valor = carta.slice(0,2);
    return isNaN(valor) ?  valor === 'A' ? 11 : 10 : parseInt(valor);
    // if (isNaN(valor)) {
    //     puntos = valor === 'A' ? 11 : 10;
    // }
    // else {
    //     console.log("es un numero");
    //     puntos = parseInt(valor);
    // }
    //return puntos;
}
// console.log(valorCarta(carta));

//eventos

botonPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    smalls[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    jugadorCartas.append(imgCarta);
    if (puntosJugador > 21) {
        console.warn("perdiste");
        botonPedir.disabled = true;
    }
    else if (puntosJugador === 21) {
        console.warn("ganaste");
    }
});
