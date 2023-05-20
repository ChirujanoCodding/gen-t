const d = document;

const form = d.getElementById('custom-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = d.getElementById('name').value;
    const surname = d.getElementById('surname').value;
    const mail = d.getElementById('mail').value;
    const genre = d.querySelector('input[type=radio]:checked').value;
    const age = d.getElementById('age').value;
    const isArgentinian = d.getElementById('country-box').checked;

    console.log(`name: ${name}`)
    console.log(`surname: ${surname}`)
    console.log(`mail: ${mail}`)
    console.log(`genre: ${genre}`)
    console.log(`age: ${age}`)
    console.log(`you are${isArgentinian ? "" : "n't"} Argentinian!`)

})