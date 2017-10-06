(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', '$state', 'data'];
    function DetailController($stateParams, $state, data){
      var detail = this;
      detail.subnet = $stateParams.subnet;
      detail.data = data;
      detail.minDate = $state.params.minDate;
      detail.maxDate = $state.params.maxDate;
    }

})();
