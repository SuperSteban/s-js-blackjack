import {pedirCarta, valorCarta, createCardHtml} from './'

/**
 * 
 * @param {int} puntosMinimos 
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML , divCartasComputadora ,deck=[] ) => {

    if(!puntosMinimos) throw Error ('Puntos minimos son necesarios');
    if(!deck) throw Error ('deck es necesarios');
    if(!puntosHTML) throw Error ('deck es necesarios');

    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // TO DO : CREATE CARD
        const imgCarta = createCardHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}