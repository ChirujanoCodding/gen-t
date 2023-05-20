const div = document.getElementsByTagName('div')[0];

// styling
// div.style.width = '300px'
// div.style.height = '300px'
// div.style.backgroundColor = 'black'

// agregar
// div.classList.add('square')
// remover
// div.classList.remove('square')

// IIFE function
// more here: https://developer.mozilla.org/es/docs/Glossary/IIFE
(() => {
    setInterval(() => {
        div.classList.toggle('square')
    }, 1000)
})()