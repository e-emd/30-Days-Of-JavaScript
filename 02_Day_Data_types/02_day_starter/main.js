// this is your main.js script
// Exercise level 1
let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3, 5));
console.log(challenge.substr(3, 18));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.trim(' '));
console.log(challenge.startsWith(3));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));
console.log(challenge.repeat(2));
let daysOf = '30 Days Of';
console.log(daysOf.concat(' JavaScript'));

let array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(array);
console.log(array.split(','));

let index_of =
  'You cannot end a sentence with because because because is a conjunction';
console.log(index_of.indexOf('You'));
console.log(index_of.indexOf('conjunction'));
console.log(index_of.search('because'));

// Exercise level 2
let quote =
  'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(
  `The quote '${quote}' by John Holmes teaches us to help one another.`
);
let quote1 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote1);

let ten = '10';
console.log(typeof ten === 'string');

console.log(Math.round(parseFloat('9.8')) === 10);

let pythonJargon = 'Python and Jargon';
console.log(pythonJargon.includes('on'));

let jargon = 'I hope this course is not full of jargon.';
console.log(jargon.includes('jargon'));

const randomNum100 = Math.floor(Math.random() * 100);
console.log(randomNum100);

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(50, 100));

const randomNum0to250 = Math.floor(Math.random() * 255) + 1;
console.log(randomNum0to250);

let javascript = 'JavaScript';
console.log(Math.floor(Math.random() * javascript.length));

let because =
  'You cannot end a sentence with because because because is a conjunction';
console.log(because.substr(30, 25));
