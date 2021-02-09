// Print all the even numbers ( 1<0 n <= 30)
for (let i = 1; i <= 30; i++) {
  if (i % 2 == 0) {
    console.log(i, ' is an even number');
  }
}

//Print all odd number (1 < n < 50)
for (let i = 1; i < 50; i++) {
  if (i % 2 != 0) {
    console.log(i, ' is an odd number');
  }
}

//Given a postiive integer, determine if this number is a prime: print yes or no

for (let i = 1; i >= 100; i++) {
  if (num <= 3) {
    console.log(i, ' is a prime number');
    continue;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(i, ' is not a prime number');
    }
  }
  console.log(i, ' is a prime number');
}

console.log('Is it a prime number: ', isPrime(9));

//Print all numbers divisible by both 4 and 6 (1 <= n <= 100)
for (let i = 1; i <= 100; i++) {
  if (i % 4 === 0 && i % 6 == 0) {
    console.log(i, ' is divisible by 4 and 6');
  }
}
