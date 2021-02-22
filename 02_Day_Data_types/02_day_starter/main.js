// this is your main.js script
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
