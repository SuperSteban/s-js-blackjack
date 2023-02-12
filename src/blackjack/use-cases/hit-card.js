
/**
 * Esta función me permite tomar una carta
 * 
 * @param {Array<String>} deck 
 * @returns String That represent a Card
 */
export const pedirCarta = (deck) => {
    
    if ( deck.length === 0 || !deck ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}