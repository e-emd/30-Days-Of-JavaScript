// this is your main.js script
// Exercise: level 1
console.log('---------Question 1-----------');
const data = {
  firstName: 'Edwin',
  lastName: 'Marquez',
  country: 'Usa',
  city: 'Colorado',
  age: 22,
  isMarried: false,
  year: Date.now(),
};

console.log(typeof data.firstName);
console.log(typeof data.age);
console.log(typeof data.isMarried);
console.log(typeof data.year);

console.log('---------Question 2-----------');
console.log(typeof '10' === 10);

console.log('---------Question 3-----------');
console.log(parseInt('9.8') === 10);

console.log('---------Question 4-----------');
const itsRaining = false;
const itsSnowing = false;
const itsFoggy = false;
const itsCloudy = true;
const itsWindy = true;
const itsSunny = true;

console.log('---------Question 5-----------');
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); //false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log('python'.length > 'jargon'.length);

console.log('---------Question 6-----------');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('python'.match('on') || 'dragon'.match('on')));

console.log('---------Question 7-----------');
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
