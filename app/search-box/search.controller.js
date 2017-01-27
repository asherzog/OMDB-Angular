(function() {
  'use strict';

  angular
    .module('app')
    .controller('searchController', searchController);

  function searchController(searchService) {
    const vm = this;
    vm.title = 'OMDB Angular';
    vm.searchDB = searchDB;

    function searchDB() {
      searchService.get(vm.searchTerm)
        .then(response => {
          vm.movies = response.data.Search;
          console.log(vm.movies);
        });
    }

  };

}());
