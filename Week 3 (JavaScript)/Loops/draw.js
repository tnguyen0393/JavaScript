alert('Box');
let width = prompt('Enter the width');
let height = prompt('Enter the height');
let drawRow = '';

for (let i = 0; i < width; i++) {
  drawRow = drawRow + '*';
}

for (let i = 0; i < height; i++) {
  console.log(drawRow);
}

console.log('Box');

alert('Checkerboard');

let star = true;
width = prompt('Enter the width');
height = prompt('Enter the height');
let currentRow = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (star) {
      currentRow = currentRow + '*';
      star = false;
    } else {
      currentRow = currentRow + ' ';
      star = true;
    }
  }
  console.log(currentRow);
  currentRow = '';
}

console.log('Checkerboard');

alert('Cross');
width = prompt('Enter the size');
let head = 0;
let tail = width - 1;
currentRow = '';

for (let i = 0; i < width; i++) {
  for (let j = 0; j < width; j++) {
    if (j === head) {
      currentRow = currentRow + '*';
    } else if (j === tail) {
      currentRow = currentRow + '*';
    } else {
      currentRow = currentRow + ' ';
    }
  }
  console.log(currentRow);
  currentRow = '';
  head++;
  tail--;
}

console.log('Cross');

alert('Lower Triangle');
width = prompt('Enter the size');
currentRow = '';
let starCount = 1;

for (let i = 0; i < width; i++) {
  for (let j = 0; j < width; j++) {
    if (j < starCount) {
      currentRow = currentRow + '*';
    } else {
      currentRow + ' ';
    }
  }
  console.log(currentRow);
  currentRow = '';
  starCount++;
}

console.log('Lower Triangle');

alert('Upper Triangle');
width = prompt('Enter the size');
currentRow = '';
starCount = width;
for (let i = 0; i < width; i++) {
  for (let j = 0; j < width; j++) {
    if (j < starCount) {
      currentRow = currentRow + '*';
    } else {
      currentRow + ' ';
    }
  }
  console.log(currentRow);
  currentRow = '';
  starCount--;
}

console.log('Upper Triangle');

alert('Upside-down trapezoid');

while (true) {
  width = prompt('Enter the width');
  height = prompt('Enter the height');
  if (width > height) {
    break;
  }
  alert('Impossible shape! Width should be greater than height');
}
head = 0;
height = 0;
