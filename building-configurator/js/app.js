(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp', ['highcharts-ng', 'rzModule', 'ngCookies'])
    .directive('feedbackScriptsHead', FeedbackScriptsHeadDirective)
    // .directive('feedbackScriptsBody', FeedbackScriptsBodyDirective)
    .directive('ascrNavbar', AscrNavBarDirective)
    .directive('loginPanel', LoginPanelDirective)
    .constant('SESSION_DURATION', 5);

    // Feedback Scripts Head

    function FeedbackScriptsHeadDirective(){
      var ddo = {
        templateUrl: 'templates/feedbackScriptsHead.html',
        scope: {
          serverPath: '<',
        },
        controller: FeedbackScriptsHeadDirectiveController,
        controllerAs: 'head',
        bindToController: true
      }

      return ddo;
    }

    function FeedbackScriptsHeadDirectiveController(){
      var head = this;
    }

    // ASCR Nav Bar

    function AscrNavBarDirective(){
      var ddo = {
        templateUrl: 'templates/navigation.html',
        scope: {
          app: '@',
          appVersion: '<',
          onLogout: '&',
          onChangelog: '&',
          login: '<',
          signedInUser: '<'
        },
        controller: AscrNavBarDirectiveController,
        controllerAs: 'navbar',
        bindToController: true
      }

      return ddo;
    }

    function AscrNavBarDirectiveController(){
      var navbar = this;
    }

    // Login Panel

    function LoginPanelDirective(){
      var ddo = {
        templateUrl: 'templates/loginPanel.html',
        scope: {
          username: '=',
          password: '=',
          remember: '=',
          onLogin: '&',
          login: '='
        },
        controller: LoginPanelDirectiveController,
        controllerAs: 'login',
        bindToController: true
      }

      return ddo;
    }

    function LoginPanelDirectiveController(){
      var login = this;
    }

})();
