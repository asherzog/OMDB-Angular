(function() {
  'use strict';

  angular
    .module('app')
    .controller('movieController', movieController);

  function movieController() {
    const vm = this;
    console.log(vm);
  };

}());
