let simpleObj = function (c) {
  this.city = c;
};

var live1 = new simpleObj('Brooklyn');
var live2 = new simpleObj('Bronx');
simpleObj.prototype.state = 'New York';

console.log(live1);
console.log(live2);
console.log(live2.prototype === live1.prototype); //true

console.log(live1.prototype);

//When you add a prototype, it will be added to all the instantiations.
