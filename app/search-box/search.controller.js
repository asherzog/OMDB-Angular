(function() {
  'use strict';

  angular
    .module('app')
    .controller('searchController', searchController);

  function searchController() {
    const vm = this;
    vm.title = 'OMDB Angular';
    vm.searchDB = searchDB;

    function searchDB() {
      console.log(vm.searchTerm);
    }

  };

}());
