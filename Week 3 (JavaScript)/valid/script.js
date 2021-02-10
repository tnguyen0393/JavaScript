// let inputNumber = prompt('Enter a number between 1 and 99');
// while (true) {
//   if (inputNumber > 0 && inputNumber < 100) {
//     break;
//   }
//   console.log(`Please re-enter: ${inputNumber}`);
//   inputNumber = prompt('Enter a number between 1 and 99');
// }

// let squared = inputNumber * inputNumber;

// console.log(`The square of ${inputNumber} is ${squared}`);

let floor = prompt('Enter a number for the floor');
let ceiling = prompt('Enter a number for the ceiling');

// let floor = Number(userInput1);
// let ceiling = Number(userInput2);

console.log(typeof floor);
console.log(typeof ceiling);

let printNumber = '';
let numberString;

//Checks to see if user input is a number
while (true) {
  if (floor || ceiling) {
    console.log('Please enter a valid number!');
    userInput1 = prompt('Enter a number for the floor');
    userInput2 = prompt('Enter a number for the ceiling');
    floor = Number(userInput1);
    ceiling = Number(userInput2);
    console.log(typeof floor);
    console.log(typeof ceiling);
  } else {
    break;
  }
}

for (floor; floor <= ceiling; floor++) {
  numberString = floor.toString();
  printNumber = printNumber + ' ' + numberString;
}

console.log(printNumber);

