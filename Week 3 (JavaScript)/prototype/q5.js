const Song = function (title, artist) {
  this.title = title;
  this.artist = artist;
};

Song.prototype.play = function () {
  console.log(`Playing ${this.title}`);
};

var song1 = new Song('Time', 'Pink Floyd');
var song2 = new Song('Sweet Life', 'Frank Ocean');
var song3 = new Song('Intro', 'M83');
var song4 = new Song('Bloom', 'ODESZA');
var song5 = new Song('The Less I Know The Better', 'Tame Impala');

song4.play(); //logs 'Bloom'
song2.play(); //logs 'Playing: Sweet Life'
song3.play(); //logs 'Playing: Intro
