let check = true;
let numberInput;
while (check) {
  numberInput = prompt(
    'Enter a series of numbers and seprate each number with a space'
  );

  let myArray = numberInput.split(' ');

  for (item of myArray) {
    if (isNaN(item)) {
      alert('Only enter numbers please');
      check = true;
      break;
    } else {
      check = false;
    }
  }
}

let sum = 0;
let myArray = numberInput.split(' ');

for (let i = 0; i < myArray.length; i++) {
  sum += parseInt(myArray[i]);
}

alert(`Your total is ${sum}`);