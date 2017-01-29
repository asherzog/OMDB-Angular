(function() {
  'use strict';

  angular
    .module('app')
    .service('movieService', movieService);

  function movieService($http) {
    this.get = function(movie) {
      return $http.get(`http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&r=json&tomatoes=true`);
    };
  }

}());
