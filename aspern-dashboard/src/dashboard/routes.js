(function () {
'use strict';

angular.module('AspernDashboardApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');
  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/dashboard/templates/home.html',
    controller: 'HomeController as home',
    resolve: {
      data: ['$stateParams', 'DataService', function($stateParams, DataService){
        return DataService.getCurrentHomeData();
      }]
    }
  })

  // detail
  .state('detail', {
    url: '/detail/{subnet}',
    templateUrl: 'src/dashboard/templates/detail.html',
    controller: 'DetailController as detail',
    resolve: {
      subnet: ['$stateParams', function($stateParams){
        return $stateParams.subnet;
      }]
      ,
      data: ['$stateParams', 'DataService', function($stateParams, DataService){
        // return DataService.getCurrentDetailData($stateParams.subnet);
        return DataService.getDetailData();
      }]
    }
  })
  .state('chart', {
    url: '/chart/{subnet}/{energyType}',
    params: {
      detail: false
    },
    templateUrl: 'src/dashboard/templates/chart.html',
    controller: 'ChartController as chart',
    resolve: {
      data: ['$stateParams', 'ChartService', function($stateParams, ChartService){
        return ChartService.getChartData($stateParams.energyType, $stateParams.subnet);
      }],
      detail: ['$stateParams', function($stateParams){
        return $stateParams.detail;
      }],
      subnet: ['$stateParams', function($stateParams){
        return $stateParams.subnet;
      }],
      energyType: ['$stateParams', function($stateParams){
        return $stateParams.energyType;
      }]
    }
  })
  .state('chart_subnode', {
    url: '/chart/{subnet}/{subnode}/{energyType}',
    params: {
      detail: true
    },
    templateUrl: 'src/dashboard/templates/chart.html',
    controller: 'ChartController as chart',
    resolve: {
      data: ['$stateParams', 'ChartService', function($stateParams, ChartService){
        return ChartService.getChartData($stateParams.energyType, $stateParams.subnet, $stateParams.subnode);
      }],
      detail: ['$stateParams', function($stateParams){
        return $stateParams.detail;
      }],
      subnet: ['$stateParams', function($stateParams){
        return $stateParams.subnet;
      }],
      subnode: ['$stateParams', function($stateParams){
        return $stateParams.subnode;
      }],
      energyType: ['$stateParams', function($stateParams){
        return $stateParams.energyType;
      }]
    }
  });
}

})();
