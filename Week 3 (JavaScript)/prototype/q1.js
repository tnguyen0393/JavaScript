var Animal = function (name, type) {
  (this.kind = name), (this.breed = type);
};

var playground = {
  animals: [],

  addAnimal(animal) {
    this.animals.push(animal);
  },

  listAnimalKind(kind) {
    this.animals.forEach(function (animal) {
      if (animal.kind == kind) {
        console.log(animal.breed);
      }
    });
  },
};

playground.addAnimal(new Animal('dog', 'Labrador')); //playGround.Animal {lab}
playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
playground.addAnimal(new Animal('rabbit', 'Angola'));
playground.listAnimalKind('dog');
