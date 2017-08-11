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

      chart.title = ChartService.getTitle();

      chart.categories = ChartService.getCategories();

      chart.getChartCategories = function(){
        return chart.categories;
      }

       chart.chartData = ChartService.getData();

       chart.getChartData = function(){
         return chart.chartData;
       }

      chart.chartConfig = {
        chart: {
          type: 'line'
        },
        series: [{
          data: ChartService.getData().chart,
          name: 'configuration',
          id: 'configuration'
        }],
        title: {
          text: ChartService.getTitle()
        }
        ,
        xAxis: {
          categories: ChartService.getCategories()
        }
      }

    }

})();
