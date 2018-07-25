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


module.exports = Cinema;
