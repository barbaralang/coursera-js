(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('ParameterController', ParameterController);

    ParameterController.$inject = ['ChartService', '$scope'];
    function ParameterController(ChartService, $scope){
      var parameter = this;

      console.log('initParameters parameterController');

      parameter.solarSlider = {
        minValue: 0,
        // value: 10,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      parameter.waterSlider = {
        minValue: 0,
        // value: 20,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      parameter.batterySlider = {
        minValue: 0,
        // value: 30,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      parameter.pvSlider = {
        minValue: 0,
        // value: 40,
        options: {
          floor: 0,
          ceil: 100,
          step: 1
        }
      };

      parameter.solarSlider.value = ChartService.getParameter().solar;
      parameter.waterSlider.value = ChartService.getParameter().water;
      parameter.batterySlider.value = ChartService.getParameter().battery;
      parameter.pvSlider.value = ChartService.getParameter().pv;

      $scope.$on("slideEnded", function() {
        // user finished sliding a handle

        var values= {
          solar: parameter.solarSlider.value,
          water: parameter.waterSlider.value,
          battery: parameter.batterySlider.value,
          pv: parameter.pvSlider.value
        }

        console.log(values);
        ChartService.setParameter(values);
      });

    }

})();
