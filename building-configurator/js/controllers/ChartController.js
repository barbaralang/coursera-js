(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .controller('ChartController', ChartController);

    ChartController.$inject = ['ChartService', '$scope'];
    function ChartController(ChartService, $scope){
      var chart = this;
      var highChart;
      // var parameter = ChartService.getParameter();

       chart.chartData = ChartService.getChartValues();
      // chart.getChartData = function(){
      //   var values = [];
      //   // angular.forEach(parameter, function(value, key){
      //   //   values.push(value);
      //   // });
      //   return values;
      // }
      chart.categories = ['tenants', 'floor', 'solar', 'water', 'pv', 'battery'];

      chart.options =  {
        xAxis: {
          categories: ['# of Tenants', 'Floor Size', 'Solar', 'Water', 'PV', 'Battery']
          // categories: []
        },

        series: [{
          // data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          data: []
        }]
      };

      chart.getChartCategories = function(){
        return chart.categories;
      }



        // chart.options.xAxis[0].categories = chart.getChartCategories();

      $scope.$on('updateChart', function(parameters){
        console.log('update chart with: ' + parameters);
      });


      console.log('Data in ChartController');
      console.log(chart.chartData);
      console.log('Categories in ChartController');
      console.log(chart.categories);
      // $scope.$watch('chart.getChartData', function(newValue, oldValue){
      //   // if(newValue === oldValue){
      //   //   return;
      //   // }
      //
      //   console.log('watch chartService');
      //   console.log(chart.chartData);
      // }, true)


    }

})();
