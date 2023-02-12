import _ from 'underscore';

let deck = [];

/**
 * 
 * @param {Array<string>} cartaTipo 
 * @param {Array<string>} cartaEspecial 
 * @returns {Array} Nuevo Arreglo de Cartas
 */
export const crearDeck = (cartaTipo, cartaEspecial) => {
    if(!cartaTipo) throw new Error("Tipo de Carta ERROR");
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cartaTipo ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cartaTipo ) {
        for( let esp of cartaEspecial ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}