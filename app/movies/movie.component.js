(function() {
  'use strict';

  angular
    .module('app')
    .component('movie', {
      controller: 'movieController',
      bindings: {
        movie: '='
      },
      templateUrl: '../../app/movies/movie.template.html'
    });

}());
