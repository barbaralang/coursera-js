(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('ChartController', ChartController);

    // DetailController.$inject = ['$stateParams', '$state', 'data'];
    // function DetailController($stateParams, $state, data){
    ChartController.$inject = ['DataService','ChartService', '$stateParams', '$state', '$scope', '$rootScope'];
    function ChartController(DataService, ChartService, $stateParams, $state, $scope, $rootScope){
      var chart = this;

      chart.minDate = DataService.minDate;
      chart.maxDate = DataService.maxDate;
      chart.dateFilter = DataService.dateFilter;
      chart.kumuliert = DataService.btnKumuliert;

      chart.subnet = $stateParams.subnet;
      chart.subnode = $stateParams.subnode;
      chart.energyType = $stateParams.energyType;
      chart.detail = $stateParams.detail;
      chart.title = ChartService.getTitle();

      chart.chartConfig = {
        chart: {
          type: 'area'
        },
        series: [{
          data: ChartService.getData().chart,
          name: 'data',
          id: 'data'
        }],
        title: {
          text: ChartService.getTitle()
        }
        ,
        xAxis : {
          ordinal : false,
          categories : [],
          tickmarkPlacement : 'on',
          pointIntervalUnit : 'day',
          type : 'datetime',
          labels : {
            formatter : function() {
              var d = new Date(this.value);
              return Highcharts.dateFormat('%e %b %H:%M', this.value);
            }
          }
        },
        yAxis: {
          title: {
            text: ChartService.getUnit()
          }
        },
        tooltip: {
          formatter: function () {
            //            	console.log(this.point);
            return '<b>Date:</b> ' + this.point.x + '<br>'
            + '<b>'+ ChartService.getUnit() +':</b> ' + this.point.y + '<br>'
            + ' <br> '
            ;
          }
        }
      }

      $scope.$watch('chart.subnet', function(oldValue, newValue){
        if(oldValue !== newValue){
          console.log('change value subnet');
          ChartService.setSubnet(newValue);
        }
      });

      $scope.$watch('chart.subnode', function(oldValue, newValue){
        if(oldValue !== newValue){
          console.log('change value subnode');
          ChartService.setSubnode(newValue);
        }
      });

      $scope.$watch('chart.energyType', function(oldValue, newValue){
        if(oldValue !== newValue){
          console.log('change value energyType');
          ChartService.setEnergyType(newValue);
        }
      });
    }

})();
