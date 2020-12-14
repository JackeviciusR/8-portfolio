// Premiu features sekcija
import { isValidInput } from './isValidInput.js';
import { isValidFeature } from './isValidFeature.js';

/**
 * Premium Features sekcija generuojanti funkcija
 * @param {string} selector CSS like salyga, aip rasti norima vieta turinio geeravimui
 * @param {Array} data Sarasas objektu aprasanciu kiekviena Premium Feature
 * @return {*}
 */
function renderPremiumFeatures(selector, featuresData) {
    
    // input validation
    if (!isValidInput(selector, featuresData)) {
        return false;
    }

    // logic

    // susirandam vieta pagal selektoriu
    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('ERROR: could not find an element by a given selector');
        return false;
    }

    let HTML ='';

    // pasirenkame viena
    const count = featuresData.maxLimit || featuresData.data.lenght;

    for (let i=0; i < count; i++) {

        const feature = featuresData.data[i];

        console.log(feature);
        HTML += `<div class="col-4 col-sm-6 col-xs-12">
                    <div class="block">
                        <img src="./img/${featuresData.imgFolder}/${feature.img}" alt="Premium features &quot;${feature.title}&quot; image">
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                    </div>
                 </div>`;
    }


    // post logic validation
    if (HTML === '') {
        console.error('ERROR: given data object does not contain valid data.');
        return false;
    }
    
    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderPremiumFeatures }