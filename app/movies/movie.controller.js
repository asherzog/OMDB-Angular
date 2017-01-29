(function() {
  'use strict';

  angular
    .module('app')
    .controller('movieController', movieController);

  function movieController(movieService) {
    const vm = this;
    vm.more = false;
    vm.btn = "more";
    vm.viewMovie = viewMovie;
    vm.classes = classes;

    function viewMovie(movie) {
      movieService.get(movie)
        .then(response => {
          vm.more = !vm.more;
          vm.movie = response.data;
          if (vm.more) {
            vm.btn = "Less";
          } else {
            vm.btn = "More";
          }
        });
    }

    function classes(rating) {
      if (rating > 8) {
        return 'green';
      } else if (rating > 6) {
        return 'orange';
      } else {
        return 'red';
      }
    };
  };

}());
