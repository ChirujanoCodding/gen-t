const button = document.getElementById('btn')

// button.addEventListener('click', () => {
//     document.body.insertAdjacentHTML('beforeend', '<p>Beep!</p>')
//     document.body.classList.toggle('color')
// })

button.addEventListener('click', onClick)

function onClick() {
    document.body.insertAdjacentHTML('beforeend', '<p>Beep!</p>')
    document.body.classList.toggle('color')
}