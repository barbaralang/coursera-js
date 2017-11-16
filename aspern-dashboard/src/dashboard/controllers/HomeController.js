(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['data', 'DataService', '$scope', '$rootScope'];
    function HomeController(data, DataService, $scope, $rootScope){
      var home = this;
      home.data = data;

      // home.filterId = '';
      //
      // home.filter = {
      //   type: '',
      //   subnet: '',
      //   energyType: ''
      // };
      //
      // home.onFilter = function(){
      //   console.log('on filter');
      //   if(home.filterId.trim().length !== 0){
      //     return DataService.getCurrentHomeData(filterId);
      //   }
      // }

      home.root = $rootScope;

      home.radioModelSubnet = {};

      home.radioModelEnergy = {};

      home.resetFilter = function(type){
        if(type == 'subnet'){
          for (var member in home.radioModelSubnet) delete home.radioModelSubnet[member];
        }
        else if(type = 'energy'){
          for (var member in home.radioModelEnergy) delete home.radioModelEnergy[member];
        }else{
          for (var member in home.radioModelSubnet) delete home.radioModelSubnet[member];
          for (var member in home.radioModelEnergy) delete home.radioModelEnergy[member];
        }
        DataService.resetCurrentHomeData();
        home.data = DataService.getCurrentHomeData();
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

      $scope.$watchCollection('home.radioModelEnergy', function () {
        home.energyTypeResults = angular.copy(home.radioModelEnergy);
        console.log('energyType: ' + JSON.stringify(home.radioModelEnergy));
        if(Object.keys(home.radioModelEnergy).length > 0){
          // if subnet filter is active --> delete
          if(Object.keys(home.radioModelSubnet).length > 0){
            home.resetFilter('subnet');
          }
            DataService.setEnergyTypeFilter(home.radioModelEnergy, 'home');
        }
        // else{
        //   DataService.resetCurrentHomeData();
        //   home.data = DataService.getCurrentHomeData();
        // }
      });

      home.subnetResults = [];

      $scope.$watchCollection('home.radioModelSubnet', function () {
        home.subnetTypeResults = angular.copy(home.radioModelSubnet);
        console.log('subnet: ' + JSON.stringify(home.radioModelSubnet));
        if(Object.keys(home.radioModelSubnet).length > 0){
          // if energyType filter is active --> delete
          if(Object.keys(home.radioModelEnergy).length > 0){
            home.resetFilter('energy');
          }
            DataService.setSubnetFilter(home.radioModelSubnet, 'home');
        }
        // else{
        //   DataService.resetCurrentHomeData();
        //   home.data = DataService.getCurrentHomeData();
        // }
      });
    }

})();
