let ArrayString = function (array) {
  this.str = array.join('');
};

let myName = new ArrayString(['T', 'i', 'e', 'n']);

console.log(myName);
