function House(symbol) {
  this.symbol = symbol;
  this.lord = undefined;
}
function Person(name) {
  this.name = name;
  this.children = null;
  this.parent = null;
}
Lannister = new House('lion');
Tywin = new Person('Tywin');
Tyrion = new Person('Tyrion');
Cersi = new Person('Cersi');
Jamie = new Person('Jamie');
Joffrey = new Person('Joffrey');
Myrcella = new Person('Myrcella');
Tomme = new Person('Tomme');
Lannister.lord = Tywin;
Tywin.children = [Jamie, Cersi, Tyrion];
Jamie.parent = Tywin;
Cersi.parent = Tywin;
Tyrion.parent = Tywin;
Jamie.house = Lannister;
Myrcella.house = Lannister;
Tomme.house = Lannister;
console.log(Lannister);
console.log(Tywin);
console.log(Cersi);

console.log(Jamie);
console.log(Myrcella);
console.log(Tomme);
