(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService(){
  var $ctrl = this;

  var user ={
    // firstname: "",
    // lastname: "",
    // email: "",
    // phone: ""
  }

  $ctrl.user = user;

  $ctrl.signup = function(newUser){
    user.firstname = newUser.firstname;
    user.lastname = newUser.lastname;
    user.email = newUser.email;
    user.phone = newUser.phone;
    user.menuitemobj = newUser.menuitemobj;
    return true;
  }

  $ctrl.getUserInfo = function() {
    return user;
  }

}

})();
