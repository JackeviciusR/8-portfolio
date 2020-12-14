 
 /**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento generavimui
 * @param {Array} data duomenys
 */

  function renderHeader(selctor, data) {
      // input validation

      // logic
    const DOM = document.querySelector(selctor);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (let item of data) { 
    /* 2var: for (let { link, name } of data ) */
        HTML += `<a href="${item.link}">${item.name}</a>`;
    }

    // post logic validation
    if (HTML === '') {
        return false;
    }

    console.log(`HTML: `, HTML);


    // return
    DOM.innerHTML = HTML;
    return true;

  }

  export { renderHeader }