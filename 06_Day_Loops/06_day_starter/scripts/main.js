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
