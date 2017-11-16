(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('DetailController', DetailController);

    // DetailController.$inject = ['$stateParams', '$state', 'data'];
    // function DetailController($stateParams, $state, data){
    DetailController.$inject = ['data', 'subnet', '$scope', '$rootScope'];
    function DetailController(data, subnet, $scope, $rootScope){
      var detail = this;
      detail.root = $rootScope;

      detail.data = data;
      detail.subnet = subnet;

      detail.radioModelSubnet = {};

      detail.radioModelEnergy = {};

      detail.resetFilter = function(type){
        if(type == 'subnet'){
          for (var member in detail.radioModelSubnet) delete detail.radioModelSubnet[member];
        }
        else if(type = 'energy'){
          for (var member in detail.radioModelEnergy) delete detail.radioModelEnergy[member];
        }else{
          for (var member in detail.radioModelSubnet) delete detail.radioModelSubnet[member];
          for (var member in detail.radioModelEnergy) delete detail.radioModelEnergy[member];
        }
        DataService.resetCurrentDetailData();
        detail.data = DataService.getCurrentDetailData();
      }

      detail.energyTypeResults = [];

      $scope.$watchCollection('detail.radioModelEnergy', function () {
        detail.energyTypeResults = angular.copy(detail.radioModelEnergy);
        console.log('energyType: ' + JSON.stringify(detail.radioModelEnergy));
        if(Object.keys(detail.radioModelEnergy).length > 0){
          // if subnet filter is active --> delete
          if(Object.keys(detail.radioModelSubnet).length > 0){
            detail.resetFilter('subnet');
          }
            DataService.setEnergyTypeFilter(detail.radioModelEnergy, 'detail');
        }
        // else{
        //   DataService.resetCurrentHomeData();
        //   detail.data = DataService.getCurrentHomeData();
        // }
      });

      detail.subnetResults = [];

      $scope.$watchCollection('detail.radioModelSubnet', function () {
        detail.subnetTypeResults = angular.copy(detail.radioModelSubnet);
        console.log('subnet: ' + JSON.stringify(detail.radioModelSubnet));
        if(Object.keys(detail.radioModelSubnet).length > 0){
          // if energyType filter is active --> delete
          if(Object.keys(detail.radioModelEnergy).length > 0){
            detail.resetFilter('energy');
          }
            DataService.setSubnetFilter(detail.radioModelSubnet, 'detail');
        }
        // else{
        //   DataService.resetCurrentHomeData();
        //   detail.data = DataService.getCurrentHomeData();
        // }
      });
    }

})();
