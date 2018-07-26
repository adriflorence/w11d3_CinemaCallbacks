const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  });
};

Cinema.prototype.findFilm = function(title){
  return this.films.find(function(film) {
    if(film.title === title){
      return film;
    }
  });
};

Cinema.prototype.filmsByGenre = function (genre) {
  return this.films.filter(function(film) {
    if(film.genre === genre) {
      return film;
    }
  });
};


Cinema.prototype.filmsFromYear = function (year) {
  return this.films.filter(function(film){
    if(film.year === year) {
      return film;
    }
  })
};


Cinema.prototype.overCertainLength = function (length) {
  return this.films.every(function(film){
    if(film.length > length) {
      return film;
    }
  })
};


Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce(function(acc, film){
    return acc + film.length;
  }, 0) // If you use reduce, remember to pass in the initial value of the accumulator as the second argument.
};


Cinema.prototype.filmsByProperty = function(property, criteria){
  return this.films.filter(function(film){
    if (film[property] === criteria){
      return film;
    }
  });
}


module.exports = Cinema;
