function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new person('John', 'Doe', 50, 'blue');
var myMother = new person('Sally', 'Rally', 48, 'green');
var mySelf = new person('Tien', 'Nguyen', 27, 'blue');

console.log(myFather);
console.log(myMother);
console.log(mySelf);
