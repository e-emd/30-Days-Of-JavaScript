console.log(countries);
alert('Open the browser console whenever you work on JavaScript');
alert('Open the console and check if the countries has been loaded');

// Exercise: Level 1
let arr = [];
const middleArr = webTechs[Math.floor(webTechs.length / 2)];
const lastItem = webTechs[webTechs.length - 1];
let mixedDataTypes = [
  [1, 2, 3],
  'hello',
  {
    firstName: 'edwin',
    lastName: 'Marquez',
  },
  9,
  true,
];
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
  'Razer',
];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];
const uppercaseCompany = itCompanies.map((x) => {
  return x.toUpperCase();
});
const sentenceArr = itCompanies.slice(0, itCompanies.length - 1).join(', ');
const itSearch = prompt('Search for an it company');
const arrContains = itCompanies.indexOf(itSearch) > -1;
if (arrContains) {
  console.log(`${itSearch} is found`);
} else {
  console.log(`${itSearch} was not found`);
}

const sortedArr = itCompanies.sort();
const spliceArr3 = itCompanies.slice(3);
const spliceArrLast = itCompanies.slice(-3);

const itLength = itCompanies.length;

console.log(itCompanies.splice(4, 1));
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(middleArr);
console.log(lastItem);
console.log(mixedDataTypes.length);
console.log(itCompanies);
console.log(itCompanies.length);
console.log(middleCompany);
console.log(lastCompany);
console.log(uppercaseCompany);
console.log(`${sentenceArr} and ${lastCompany} are big IT companies`);
console.log(sortedArr);
console.log(itCompanies.reverse());
console.log(spliceArr3);
console.log(spliceArrLast);
console.log(itCompanies.slice(1, Math.floor(itCompanies.length / 2)));
console.log(itCompanies.shift());
console.log(itCompanies.pop());
console.log(itCompanies.splice());

// Exercise level 2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let noPun = text.replace(/[^\w\s]|_/g, ''); // regex to remove punctuations
let words = noPun.split(' ');

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.splice(2, 1, 'Green Tea'); // modify tea to green tea
const allergic = prompt('Are you allergic to honey yes or no?');
console.log(shoppingCart.unshift('Meat')); // add Meat to the begging
console.log(shoppingCart.push('Sugar')); // add sugar to the end
allergic === 'yes'
  ? console.log(shoppingCart.filter((x) => x !== 'Honey'))
  : console.log(shoppingCart); // remove honey if allergic to it

let ethiopia = countries.includes('Ethiopia');
ethiopia ? console.log('ETHIOPIA') : console.log(countries.push('Ethiopia'));

let sass = 'Sass';
let includesSass = webTechs.includes(sass);
includesSass
  ? console.log(`${sass} is a CSS preprocess`)
  : console.log([...webTechs, sass]);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// exercise level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
let ageMin = ages.reduce(
  ({ max, min }, v) => ({
    min: min < v ? min : v,
    max: max > v ? max : v,
  }),
  { min: ages[0], max: ages[0] }
);

const median = (arr) => {
  const mid = Math.floor(arr.length / 2);
  num = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;
};

const average = (arr) => {
  const total = arr.reduce((acc, c) => acc + c, 0);
  return total / arr.length;
};

let min = ages.indexOf(19);
let max = ages.lastIndexOf(26);
let range = max - min;

let compareMin = Math.abs(min - average(ages));
let compareMax = Math.abs(max - average(ages));

console.log(ages);
console.log(ageMin);
console.log(median(ages));
console.log(average(ages));
console.log(range);
console.log(compareMin);
console.log(compareMax);

console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2)]);

const half = Math.ceil(countries.length / 2);
const firstHalf = countries.splice(0, half);
const secondHalf = countries.splice(-half);

console.log(firstHalf);
console.log(secondHalf);
