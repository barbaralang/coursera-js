(function () {
'use strict';

angular.module('AspernDashboardApp')
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
    templateUrl: 'src/dashboard/templates/home.html',
    controller: 'HomeController as home',
    resolve: {
      data: ['$stateParams', 'DataService', function($stateParams, DataService){
        return DataService.getHomeData();
      }]
    }
  })

  // detail
  .state('detail', {
    url: '/detail/{subnet}',
    templateUrl: 'src/dashboard/templates/detail.html',
    controller: 'DetailController as detail',
    resolve: {
      data: ['$stateParams', '$state', 'DataService', function($stateParams, $state, DataService){
        return DataService.getDetailData();
      }]
    }
  })
  .state('chart', {
    url: '/chart/{energyType}',
    // params: {
    //         minDate: null,
    //         maxDate: null
    //     },
    templateUrl: 'src/dashboard/templates/chart.html',
    controller: 'ChartController as chart',
    // resolve: {
    //   items: ['$stateParams', 'DataService', function($stateParams, DataService){
    //     return DataService.getChartData($stateParams.energyType);
    //   }]
    // }
  });
}

})();
