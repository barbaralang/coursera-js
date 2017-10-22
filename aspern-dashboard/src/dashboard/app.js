(
  function() {
    'use strict';

    angular.module('AspernDashboardApp', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'highcharts-ng', 'ngCookies'])
    .run( ['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ])
    .directive('feedbackScriptsHead', FeedbackScriptsHeadDirective)
    // .directive('feedbackScriptsBody', FeedbackScriptsBodyDirective)
    .directive('ascrNavbar', AscrNavBarDirective)
    .directive('loginPanel', LoginPanelDirective)
    .constant('SESSION_DURATION', 5)
    .constant('Constants', {
        EnergyTypes: {
          power: 'POWER',
          heating: 'HEATING',
          hotWater: 'HOT_WATER',
          coldWater: 'COLD_WATER'
        }
      }); 

    // Feedback Scripts Head

    function FeedbackScriptsHeadDirective(){
      var ddo = {
        templateUrl: 'src/dashboard/templates/feedbackScriptsHead.html',
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
        templateUrl: 'src/dashboard/templates/navigation.html',
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
        templateUrl: 'src/dashboard/templates/loginPanel.html',
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
