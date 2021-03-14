//alert('Open the console and check if the countries has been loaded');
// Exercise: Level 1
const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);

let hash = '#';

for (let i = 0; i <= 7; i++) {
  if (i === 0) {
    console.log(hash);
  } else {
    hash += '#';
    console.log(hash);
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
  console.group(Math.pow(i, 1));
  console.group(Math.pow(i, 2));
  console.group(Math.pow(i, 3));
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else if (i % 1 === 0) {
    console.log(`${i} is odd`);
  }
}

for (let i = 0; i <= 100; i++) {
  const sum = (i * (i + 1)) / 2;
  console.log(sum);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + i);
  }
  if (i % 3 === 0) {
    console.log(i + i);
  }
}

let ranNumber = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100 + 1);
  ranNumber.push(random);
}
console.log(ranNumber);

let uniqueNumber = [];
while (uniqueNumber.length < 5) {
  let ran = Math.floor(Math.random() * 5 + 1);
  if (uniqueNumber.indexOf(ran) === -1) uniqueNumber.push(ran);
}
console.log(uniqueNumber);

let ranCharacters = '';
let character = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 6; i++) {
  ranCharacters += character.charAt(
    Math.floor(Math.random() * character.length)
  );
}
console.log(ranCharacters);

// Exercise: Level 2
let id = '';
for (let i = 0; i < 10; i++) {
  id += character.charAt(Math.floor(Math.random() * character.length));
}
console.log(id);

let decimal = '0123456789ABCDEF';
let hex = '#';
let hexadecimal = '';
for (let i = 0; i < 6; i++) {
  hexadecimal += decimal[Math.floor(Math.random() * 16)];
}
console.log(`${hex}${hexadecimal}`);

let rgb1 = 0;
let rgb2 = 0;
let rgb3 = 0;
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    rgb1 += Math.floor(Math.random() * 250 + 1);
  } else if (i === 2) {
    rgb2 += Math.floor(Math.random() * 250 + 1);
  } else {
    rgb3 += Math.floor(Math.random() * 250 + 1);
  }
}
console.log(`rgb(${rgb1},${rgb2},${rgb3})`);

const newCountry = [];
for (const countriesCap of countries1) {
  newCountry.push(countriesCap.toUpperCase());
}
console.log(newCountry);

const newLength = [];
for (const countriesLength of countries1) {
  newLength.push(countriesLength.length);
}
console.log(newLength);

const first3 = [];
for (const countries3 of countries1) {
  first3.push(countries3.slice(0, 3).toUpperCase());
}
console.log(first3);

const newCountryArr = [];
for (let i = 0; i < countries1.length; i++) {
  newCountryArr.push([countries1[i], first3[i], newLength[i]]);
}
console.log(newCountryArr);

const containsLand = (a, b) => {
  const typeArr = [...a, ...b];
  const typeSet = new Set(typeArr);
  return typeArr.length > typeSet.size;
};
console.log(containsLand(['land'], countries1));
