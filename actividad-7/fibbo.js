const fizzBuzz = (n, f = "Fizz", b = "Buzz", fn = 3, bn = 5) => (n % fn ? '' : f) + (n % bn ? '' : b) || n;
Array.from({ length: 100 }, (_, i) => i + 1).forEach(i => console.log(fizzBuzz(i)))