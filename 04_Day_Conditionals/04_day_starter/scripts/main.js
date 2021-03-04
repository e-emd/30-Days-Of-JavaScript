// this is your main.js script
alert('Open the browser console whenever you work on JavaScript');

// exercise level 1
const age = prompt('Enter your age');

switch (true) {
  case age >= 18:
    console.log(`You are old enough to drive`);
    break;
  case age < 18:
    console.log(`You need to be older than 18 to drive`);
    break;
  default:
    console.log(`Enter value was not a number`);
}

// 2
const myAge = 22;
let ageDifference;

if (myAge > age) {
  ageDifference = myAge - age;
  console.log(`I am ${ageDifference} years older than you`);
} else {
  ageDifference = age - myAge;
  console.log(`You are ${ageDifference} years older than me`);
}

// 3
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4
const number = prompt('Enter a number');

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// Exercises: level 2
// 1
let grade = 100;
switch (true) {
  case grade > 90 && grade < 100:
    console.log(`${grade}% you got a A`);
    break;
  case grade > 70 && grade < 89:
    console.log(`${grade}% you got a B`);
    break;
  case grade > 60 && grade < 69:
    console.log(`${grade}% you got a C`);
    break;
  case grade > 50 && grade < 59:
    console.log(`${grade}% you got a D`);
    break;
  case grade > 0 && grade < 49:
    console.log(`${grade}% you got a F`);
    break;
  default:
    console.log(grade);
}

// 2
let monthInput = prompt('Enter a month');
let month = monthInput.toLowerCase();

switch (month) {
  case 'september' || 'october' || 'november':
    console.log('The season is Autumn');
    break;
  case 'december' || 'january' || 'february':
    console.log('The season is Winter');
    break;
  case 'march' || 'april' || 'may':
    console.log('The season is Spring');
    break;
  case 'june' || 'july' || 'august':
    console.log('The season is summer');
    break;
  default:
    console.log('Invalid month');
}
