(function () {
    'use strict';

    angular.module('LunchCheckApp', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){

      var enjoy = 'Enjoy!';
      var much = 'Too much!';
      var emptyData = 'Please enter data first';
      var danger = 'danger';
      var success = 'success';

      $scope.state = danger;
      $scope.lunchMessage = '';

      $scope.checkLunch = function() {

        if($scope.dishList != null && $scope.dishList.length > 0){
          var size = $scope.dishList.split(',').length;
          if(size <= 3){
            $scope.lunchMessage = enjoy;
            $scope.state = success;
          }else{
            $scope.lunchMessage = much;
            $scope.state = danger;
          }
        }else{
          $scope.lunchMessage = emptyData;
          $scope.state = danger;
        }

      }

    }

})();
