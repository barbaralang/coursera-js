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
          step: 1,
          id: 'tenants',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, fixed.tenantsSlider.value);
          }
        }
      };

      fixed.floorSlider = {
        minValue: 0,
        // maxValue: 100,
        value: 20,
        options: {
          floor: 0,
          ceil: 100,
          step: 1,
          id: 'floor',
          onStart: function(id) {
            console.log('on start ' + id); // logs 'on start slider-id'
          },
          onChange: function(id) {
            console.log('on change ' + id); // logs 'on change slider-id'
          },
          onEnd: function(id) {
            console.log('on end ' + id); // logs 'on end slider-id'
            ChartService.updateSlider(id, fixed.floorSlider.value);
          }
        }
      };

      fixed.tenantsSlider.value = ChartService.getData().parameters.tenants;
      fixed.floorSlider.value = ChartService.getData().parameters.floor;

      // fixed.sliderValues = {
      //   tenants: fixed.tenantsSlider.value,
      //   floor: fixed.floorSlider.value
      // };

      // $scope.$on("slideEnded", function() {
      //   // user finished sliding a handle
      //
      //   var values= {
      //     tenants: fixed.tenantsSlider.value,
      //     floor: fixed.floorSlider.value
      //   }
      //
      //   console.log(values);
      //   ChartService.setParameter(values);
      // });

    }

})();
