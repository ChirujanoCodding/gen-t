/* Aumentar la nota */
{
    class Student {
        constructor(name, note) {
            this.name = name
            this.note = note
        }
    }

    const students = Array.from({ length: names.length }, ((_, i) => new Student(names[i], notes[i])))

    console.log(students)

    students.forEach(st => st.note = st.note > 5 ? Math.min(10, st.note + 2) : st.note)

    console.log(students)
}

/* Base de datos de peliculas */
{
    class Movie {
        constructor(name, rating, watched) {
            this.name = name
            this.rating = rating
            this.watched = watched
        }
    }

    const movies = [
        new Movie('Fractured', 5, true),
        new Movie('Wakolda', 1, true),
        new Movie('Desde mi cielo', 4, true),
        new Movie('No sos vos, soy yo', 5, true),
        new Movie('Disaster movie', 2, false),
        new Movie('Tiempo de valientes', 3, true),
    ]

    for (let movie of movies) {
        console.log(`You ${movie.watched ? "" : "didn't"} watched this movie: ${movie.name} | Rating: ${'★'.repeat(movie.rating)}${'☆'.repeat(5 - movie.rating)}`)
    }
}

/* Numeros duplicados */
{
    let numbers = [0, 2, 4, 5, 37]
    let duplicated = {}
    for (let number of numbers) {
        duplicated[number] = number * 2
    }
    console.log(duplicated)
}

/* Posicion adecuada */
{
    const people = [
        { name: 'Andrew', age: 20 },
        { name: 'Nathan', age: 28 },
        { name: 'Joe', age: 45 },
        { name: 'Maria', age: 19 },
        { name: 'Andreah', age: 23 },
        { name: 'Sebastian', age: 20 },
        { name: 'Homer', age: 8 },
    ]

    people.sort((a, b) => a.age - b.age)
    people.forEach((p, i) => p['position'] = i)

    console.log(people)
}

/* Software Factory */
{
    class Product {
        constructor(name, price, stock) {
            this.name = name
            this.price = price
            this.stock = stock
        }
    }

    const products = [
        new Product('TV', 6000, 10),
        new Product('Notebook', 4000, 30),
        new Product('Headphones', 1500, 15),
        new Product('Monitor', 12000, 20),
        new Product('Keyboard', 3000, 5)
    ]

    const total = products.map(p => ({ [p.name]: p.price * p.stock }))

    console.log(total)
}