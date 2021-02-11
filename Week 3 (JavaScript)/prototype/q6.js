function Cars(brand, name, year, price) {
  this.brand = brand;
  this.name = name;
  this.year = year;
  this.price = price;
}

let honda = new Cars('Honda', 'Accord', 2014, 1000);
let toyota = new Cars('Toyota', 'Prius', 2015, 250);
let ford = new Cars('Ford', 'F-150', 2015, 50);

console.log(honda);
console.log(toyota);
console.log(ford);
