var Dream = function (day, mood) {
  this.day = day;
  this.mood = mood;
};

var DreamFactory = {
  dreams: [],

  createDream: function (day, mood) {
    return new Dream(day, mood);
  },

  addDream: function (dream) {
    this.dreams.push(dream);
  },

  listDreams() {
    this.dreams.forEach(function (dream) {
      console.log('You dreamed a ' + dream.mood + ' dream on ' + dream.day);
    });
  },
};

DreamFactory.addDream(DreamFactory.createDream('Sunday', 'dark'));
DreamFactory.addDream(DreamFactory.createDream('Monday', 'funny'));

DreamFactory.listDreams();
