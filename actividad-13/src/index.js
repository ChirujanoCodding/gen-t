const API = 'https://api.chucknorris.io/jokes/random';
const joke = $('#joke');
function request(api, fn) {
    $.getJSON(api, fn)
}

function setJoke({ value }) {
    joke.prop('textContent', value)
}

$(document).ready(() => request(API, setJoke))
$('#reset').click(() => request(API, setJoke))
