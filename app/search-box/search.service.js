(function() {
  'use strict';

  angular
    .module('app')
    .service('searchService', searchService);

  function searchService($http) {
    this.get = function(search) {
      return $http.get(`http://www.omdbapi.com/?s=${search}`);
    };
  }

}());
