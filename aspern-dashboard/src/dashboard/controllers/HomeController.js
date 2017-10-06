(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['data', 'DataService'];
    function HomeController(data, DataService){
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
    }

})();
