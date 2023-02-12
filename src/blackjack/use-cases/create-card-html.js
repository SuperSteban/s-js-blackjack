

/**
 * <img class="carta" src="assets/cartas/2C.png">
 * CREATE A CARD HTML
 * @param {String} card 
 * @returns {HTMLImageElement}
 */
export const createCardHtml = (card)=>{
    if(!card) throw Error('Card Necesary');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};