const source = document.getElementById('source');
const destiny = document.getElementById('destination')
const cache = source.innerHTML;

source.innerHTML = destiny.innerHTML;
destiny.innerHTML = cache;