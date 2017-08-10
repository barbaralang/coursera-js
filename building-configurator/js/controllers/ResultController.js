(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('ResultController', ResultController);

    ResultController.$inject = [];
    function ResultController(){
      var result = this;

      result.results = {
        investment: 100,
        heating: 200,
        power: 300,
        random: 400
      }
    }

})();
