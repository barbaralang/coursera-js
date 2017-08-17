(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuService'];
function SignupController(UserService, MenuService) {
  var $ctrl = this;

  // var user = UserService.getUserInfo();
  var user = {};
  var noItem = "No such menu number exists.";
  var infoSaved = "Your information has been saved.";

  $ctrl.noMenuItem = "";
  $ctrl.infoSaved = "";
  $ctrl.user = user;

  $ctrl.signUp = function(){
    $ctrl.user['menuitemobj'] = {};
    MenuService.getMenuItem($ctrl.user.menuitem).then(
      function(result){
        $ctrl.user['menuitemobj'] = angular.copy(result);
        UserService.signup($ctrl.user);
        $ctrl.infoSaved = infoSaved;
        $ctrl.noMenuItem = "";
    })
    .catch(function(error){
      console.log(error);
      $ctrl.noMenuItem = noItem;
    });
  }
}


})();
