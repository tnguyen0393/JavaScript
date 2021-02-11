var Instructor = function (fName, lName, cT = []) {
  this.firstName = fName;
  this.lastName = lName;
  this.classesTeaching = cT;
};

Instructor.prototype.employer = 'TEK global';
Instructor.prototype.info = function () {
  console.log(
    this.firstName,
    this.lastName,
    'is employed by',
    this.employer,
    'and is teaching',
    this.classesTeaching
  );
};

var young = new Instructor('Young', 'Baek', ['JavaScript']);
var dan = new Instructor('Dan', 'Anderson', ['Python']);
