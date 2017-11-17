(function () {
'use strict';

angular.module('AtavApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'src/atavapp/templates/home.template.html',
    controller: 'HomeController as home'
  })

  // forms
  .state('home.order', {
    url: '/order/{formType}',
    templateUrl: 'src/atavapp/templates/forms.template.html',
    controller: 'FormsController as forms',
    parent: 'home',
    resolve: {
      formType: ['$stateParams', function($stateParams){
        return $stateParams.formType;
      }]
    }
  });
}

})();
