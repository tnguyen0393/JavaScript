function isNumber(string) {
  //   let isNum = parseInt(string);
  //   if (isNum) {
  //     // console.log('The input is a number!'); //Is a number
  //     return true;
  //   } else {
  //     // console.log('The input is NOT a number!'); //NaN
  //     return false;
  //   }
}

console.log(isNumber('123'));

let convertToNumber = (string) => {
  let strToNum = parseInt(string);
  return strToNum;
};

let myNum = convertToNumber(25) + 25;
console.log(myNum);

// //Input has no spaces

let smaller = () => {
  let weGood = true;
  let myArray;
  while (weGood) {
    let userInput = prompt('Enter two numbers and use space to separate them');
    myArray = userInput.split(' ');
    for (item of myArray) {
      if (isNumber(item)) {
        weGood = false;
      } else {
        weGood = true;
        break;
      }
    }
  }

  let firstTime = true;
  let smallerNumber;
  for (item of myArray) {
    if (firstTime) {
      smallerNumber = item;
      firstTime = false;
      continue;
    }
    if (item < smallerNumber) {
      smallerNumber = item;
    }
  }
  return smallerNumber;
};

console.log(smaller());

const leapYear = () => {};
