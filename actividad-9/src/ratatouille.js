const img = document.getElementsByTagName('img')[0]

document.body.addEventListener('click', ({ clientX: x, clientY: y }) => {
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
})