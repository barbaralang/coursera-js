(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('ResultController', ResultController);

    ResultController.$inject = ['ChartService'];
    function ResultController(ChartService){
      var result = this;

      result.results = ChartService.getResult();
    }

})();
