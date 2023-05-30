/**
 * Crea un elemento HTML con opciones personalizadas.
 * @template {keyof HTMLElementTagNameMap} Element
 * @param {Element} element - Nombre de la etiqueta HTML para el elemento que se va a crear.
 * @param {Partial<HTMLElementTagNameMap[Element]>} [options] - Opciones para configurar el elemento.
 * @returns {HTMLElementTagNameMap[Element]} El elemento HTML creado.
 */
function createElement(element, options) {
    /** @type {HTMLElementTagNameMap[Element]} */
    let el = document.createElement(element);

    if (options) {
        Object.entries(options).forEach(props => {
            /** @type {keyof HTMLElementTagNameMap[Element]} */
            let prop = props[0];
            el[prop] = props[1];
        });
    }

    return el;
}