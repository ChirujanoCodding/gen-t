const MAX_AGE = 80;
const SNACK = 'Cheetos';
const SNACK_PER_DAY = 2;
const SNACK_PRICE = 200;
const DAYS_IN_A_YEAR = 365;
const age = Number.parseInt(prompt("please insert your age: "));

let snackLeft = SNACK_PER_DAY * ((MAX_AGE - age) * DAYS_IN_A_YEAR);

alert(`You will need ${snackLeft} ${SNACK} to last you until you are ${MAX_AGE} years old. `)
alert(`You will pay $${snackLeft * SNACK_PRICE} in total`);