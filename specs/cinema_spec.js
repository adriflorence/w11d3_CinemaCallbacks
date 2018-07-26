const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const actual = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    let filmTitles = cinema.filmTitles();
    assert.deepStrictEqual(actual, filmTitles);
  });

  it('should be able to find a film by title', function(){
    const actual = dunkirk;
    let foundFilm = cinema.findFilm("Dunkirk");
    assert.deepStrictEqual(actual, foundFilm);
  });

  it('should be able to filter films by genre', function(){
    const actual = [moonlight, trainspotting]
    let expected = cinema.filmsByGenre('drama');
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are some films from a particular year', function(){
    const actual = [bladeRunner, dunkirk, trainspotting]
    let expected = cinema.filmsFromYear(2017);
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are no films from a particular year', function(){
    const actual = []
    let expected = cinema.filmsFromYear(2019);
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether all films are over a particular length', function(){ // BOOLEAN
    const expected1 = true;
    const actual1 = cinema.overCertainLength(40);
    assert.deepStrictEqual(actual1, expected1);

    const expected2 = false;
    const actual2 = cinema.overCertainLength(115);
    assert.deepStrictEqual(actual2, expected2);
  });


  it('should be able to calculate total running time of all films', function(){
    const actual = 622;
    let expected = cinema.totalRunningTime();
    assert.strictEqual(actual, expected);
  });

  it('should be able to filter films by year', function(){
    const expected = [bladeRunner, dunkirk, trainspotting];
    const actual = cinema.filmsByProperty('year', 2017);
    assert.deepStrictEqual(actual, expected);
  });

});
