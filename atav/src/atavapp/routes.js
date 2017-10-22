(function () {
'use strict';

angular.module('AtavApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/atavapp/templates/home.template.html'
  })

  // forms
  .state('forms', {
    url: '/forms/{formType}',
    templateUrl: 'src/atavapp/templates/forms.template.html',
    controller: 'FormsController as forms',
    resolve: {
      formType: ['$stateParams', function($stateParams){
        return $stateParams.formType;
      }]
    }
  });
}

})();
