(function() {
  'use strict';

  angular
    .module('app')
    .component('viewMore', {
      controller: 'viewMoreController',
      bindings: {
        movie: '<'
      },
      templateUrl: '../../app/viewMore/movie.template.html'
    });

}());
