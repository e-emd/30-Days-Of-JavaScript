console.log(countries);
alert('Open the browser console whenever you work on JavaScript');
alert('Open the console and check if the countries has been loaded');

// Exercise: Level 1
let arr = [];
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];
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
