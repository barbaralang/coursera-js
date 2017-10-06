(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['data', 'DataService', '$scope'];
    function HomeController(data, DataService, $scope){
      var home = this;
      home.data = data;

      home.filterId = '';

      home.filter = {
        type: '',
        subnet: '',
        energyType: ''
      };

      home.onFilter = function(){
        console.log('on filter');
        if(home.filterId.trim().length !== 0){
          return DataService.getCurrentHomeData(filterId);
        }
      }

        home.subnetModel = {
          D12: {
            floor: false,
            occupants: true,
            apartments: false
          },
          D10: {
            floor: false,
            occupants: true,
            apartments: false
          },
          D08: {
            floor: false,
            occupants: true,
            apartments: false
          }
        };

        home.energyTypeModel = {
          power: {
            floor: false,
            occupants: true,
            apartments: false
          },
          heating: {
            floor: false,
            occupants: true,
            apartments: false
          },
          hotWater: {
            floor: false,
            occupants: true,
            apartments: false
          },
          coldWater: {
            floor: false,
            occupants: true,
            apartments: false
          }
        };

      home.energyTypeResults = [];

      $scope.$watchCollection('energyTypeModel', function () {
        home.energyTypeResults = [];
        angular.forEach(home.energyTypeModel, function (value, key) {
          if (value) {
            home.energyTypeResults.push(key);
          }
        });
      });

      home.subnetResults = [];

      $scope.$watchCollection('subnetModel', function () {
        home.subnetResults = [];
        angular.forEach(home.subnetModel, function (value, key) {
          if (value) {
            home.subnetResults.push(key);
          }
        });
      });
    }

})();
