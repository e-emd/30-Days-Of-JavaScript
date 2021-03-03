// this is your main.js script
alert('Open the browser console whenever you work on JavaScript');

const drivingAge = prompt('Enter your age');

switch (true) {
  case drivingAge >= 18:
    console.log(`You are old enough to drive`);
    break;
  case drivingAge < 18:
    console.log(`You need to be older than 18 to drive`);
    break;
  default:
    console.log(`Enter value was not a number`);
}
