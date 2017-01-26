(function() {
  'use strict';

  angular
    .module('app')
    .component('searchBox', {
      controller: 'searchController',
      templateUrl: '../../app/search-box/search.template.html'
    });

}());
