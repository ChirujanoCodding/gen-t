const markedText = document.getElementsByClassName('marked');

Array(...markedText).forEach((p) => p.addEventListener('click', ({ target }) => target.classList.toggle('marked')));