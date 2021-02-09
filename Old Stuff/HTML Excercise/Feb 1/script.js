//Everytime the user presses a number, the value will append
//Once the value has been appended, it must convert into an integer to be used
//Every number will have an event listener that will append and store value
//When a user presses the operation, the previous value will be stored and then be used on the new appended value

let curentValue = '';
let numCurrentValue = null;
let numberDisplay = document.getElementById('displayedNumber');
let previousNumber = 0;
let calculatedValue = 0;
let lastOperation = '';
let firstTime = true;

//This will append the string number value and dosplay
let appendNumber = (selectedNumber) => {
  curentValue = curentValue + selectedNumber;
  numberDisplay.innerHTML = curentValue;
};

//store last value when continuing operation
let storeCurrentNumber = (currentNumber) => {
  numCurrentValue = parseInt(currentNumber);
  console.log(numCurrentValue);
};

for (let i = 0; i < 4; i++) {
  let operation = document.querySelectorAll('.operation')[i];
  operation.addEventListener('click', function () {
    storeCurrentNumber(curentValue);
    curentValue = '';

    if (operation.dataset.operation === '+') {
      lastOperation = '+';
      calculatedValue += numCurrentValue;
    } else if (operation.dataset.operation === '/') {
      lastOperation = '/';
      if (firstTime) {
        calculatedValue = 1;
        firstTime = false;
      }
      calculatedValue /= numCurrentValue;
    } else if (operation.dataset.operation === '*') {
      lastOperation = '*';
      if (firstTime) {
        calculatedValue = 1;
        firstTime = false;
      }
      calculatedValue *= numCurrentValue;
    } else if (operation.dataset.operation === '-') {
      lastOperation = '-';
      calculatedValue -= numCurrentValue;
    }

    numberDisplay.innerHTML = calculatedValue;
  });
}

document.getElementById('equals').addEventListener('click', function () {
  console.log('Calculated Value = ', calculatedValue);
  console.log('Current Value = ', numCurrentValue);
  if (lastOperation === '+') {
    calculatedValue += numCurrentValue;
  } else if (lastOperation === '-') {
    calculatedValue -= numCurrentValue;
  } else if (lastOperation === '/') {
    calculatedValue /= numCurrentValue;
  } else if (lastOperation === '*') {
    calculatedValue *= numCurrentValue;
  }
  numberDisplay.innerHTML = calculatedValue;
});

for (let i = 0; i <= 10; i++) {
  let numberValue = document.querySelectorAll('.number')[i];
  numberValue.addEventListener('click', function () {
    appendNumber(numberValue.dataset.value);
    numCurrentValue = parseInt(numberValue.dataset.value);
  });
}

document.getElementById('clear').addEventListener('click', function () {
  curentValue = '';
  numCurrentValue = null;
  previousNumber = 0;
  calculatedValue = 0;
  lastOperation = '';
  firstTime = true;
  numberDisplay.innerHTML = '0.00';
});
