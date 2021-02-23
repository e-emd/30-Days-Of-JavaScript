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

let countLove =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let love = /love/gi;
console.log(countLove.match(love).length);

let becauseSentence =
  'You cannot end a sentence with because because because is a conjunction';
let becauseGi = /because/gi;
console.log(becauseSentence.match(becauseGi).length);

const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let newSentence = sentence.replace(/[^\w\s]/gi, '');
function findWord(str) {
  let count = {},
    mr,
    mc;
  str.match(/\w+/g).forEach(function (w) {
    count[w] = (count[w] || 0) + 1;
  });
  for (let w in count) {
    if (!(count[w] < mc)) {
      mc = count[w];
      mr = w;
    }
  }
  return mr;
}
console.log(findWord(newSentence));

let salary =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const reducer = (accumulator, currentValue) => accumulator + currentValue;
salary = salary.match(/\d+/g);
salary = salary.map((s) => parseInt(s));
salary = salary.reduce(reducer);
console.log(salary);
