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
          step: 1,
          id: 'solar',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, parameter.solarSlider.value);
          }
        }
      };

      parameter.waterSlider = {
        minValue: 0,
        // value: 20,
        options: {
          floor: 0,
          ceil: 100,
          step: 1,
          id: 'water',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, parameter.waterSlider.value);
          }
        }
      };

      parameter.batterySlider = {
        minValue: 0,
        // value: 30,
        options: {
          floor: 0,
          ceil: 100,
          step: 1,
          id: 'battery',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, parameter.batterySlider.value);
          }
        }
      };

      parameter.pvSlider = {
        minValue: 0,
        // value: 40,
        options: {
          floor: 0,
          ceil: 100,
          step: 1,
          id: 'pv',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, parameter.pvSlider.value);
          }
        }
      };

      parameter.solarSlider.value = ChartService.getData().parameters.solar;
      parameter.waterSlider.value = ChartService.getData().parameters.water;
      parameter.batterySlider.value = ChartService.getData().parameters.battery;
      parameter.pvSlider.value = ChartService.getData().parameters.pv;

      // $scope.$on("slideEnded", function() {
      //   // user finished sliding a handle
      //
      //   var values= {
      //     solar: parameter.solarSlider.value,
      //     water: parameter.waterSlider.value,
      //     battery: parameter.batterySlider.value,
      //     pv: parameter.pvSlider.value
      //   }
      //
      //   console.log(values);
      //   ChartService.setParameter(values);
      // });

    }

})();
