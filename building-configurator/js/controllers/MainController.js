(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('MainController', MainController);

    MainController.$inject = ['LoginService', 'ChartService', 'SESSION_DURATION', '$scope', '$http', '$cookies'];
    function MainController(LoginService, ChartService, SESSION_DURATION, $scope, $http, $cookies){
      var main = this;

      main.login = true;
      main.signedInUser = "Test";
      main.username = "";
      main.password = "";

      main.serverPath = "../emc-proxy";

      main.checkCookies = function(){

        if ($cookies.getObject('logged') != null) {
          //		  cookie present
          main.login = true;
          main.signedInUser = $cookies.getObject('logged').username;
          main.authString = 'Basic '
          + btoa(main.signedInUser + ':'
          + $cookies.getObject('logged').password);
          $http.defaults.headers.common['Authorization'] = main.authString;

        }
      }

      main.checkCookies();

      main.toggleChangeLog = function() {
        console.log('changeLog ' + main.changeLog);
        if(main.changeLog){
          main.changeLog = false;
        }else{
          main.changeLog = true;
        }
      }

      main.doLogin = function(){
        console.log('logged in');
        main.signedInUser = main.username;
        main.login = true;

        // LoginService.doLogin(main.username, main.password).then(function(result) {  //result === city
        //   if(result.data.success){
            main.error = '';
            main.authString = 'Basic ' + btoa(main.username + ':' + main.password);
            $http.defaults.headers.common['Authorization'] = main.authString;
            main.login = true;
            main.signedInUser = main.username;
            if(main.remember){
              // set cookie
              var expireDate = moment().add(SESSION_DURATION, 'm').toDate();
              var cookieObj = {
                username: main.username,
                password: main.password
              };
              $cookies.putObject('logged', cookieObj,  {'expires' : expireDate});
            }
            main.error = '';
          // }else{
          //   main.error = 'Incorrect user/password';
          // }
        // }
      // )

      }

      main.doLogOut = function(){
        main.login = false;
        main.authString = '';
        $http.defaults.headers.common['Authorization'] = '';
        main.username = '';
        main.password = '';
        main.error = '';
        main.signedInUser = 'Guest';
        $cookies.remove('logged');
      }
    }

})();
