(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('FixedController', FixedController);

    FixedController.$inject = ['ChartService', '$scope'];
    function FixedController(ChartService, $scope){
      var fixed = this;

      fixed.tenantsSlider = {
        minValue: 0,
        value: 10,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      fixed.floorSlider = {
        minValue: 0,
        // maxValue: 100,
        value: 20,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      fixed.tenantsSlider.value = ChartService.getParameter().tenants;
      fixed.floorSlider.value = ChartService.getParameter().floor;

      // fixed.sliderValues = {
      //   tenants: fixed.tenantsSlider.value,
      //   floor: fixed.floorSlider.value
      // };

      $scope.$on("slideEnded", function() {
        // user finished sliding a handle

        var values= {
          tenants: fixed.tenantsSlider.value,
          floor: fixed.floorSlider.value
        }

        console.log(values);
        ChartService.setParameter(values);
      });

    }

})();
