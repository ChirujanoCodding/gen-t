const buttons = [...document.getElementsByTagName('button')]
const images = [...document.getElementsByTagName('img')]

buttons.forEach((b, i) => b.addEventListener('click', () => images[i].classList.remove('hidden')))

images.forEach(i => i.addEventListener('click', ({ target }) => target.classList.add('hidden')))