(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp')
    .directive('hcChart', HighChartsDirective);

    // Highcharts Directive

    function HighChartsDirective() {
      return {
        restrict: 'E',
        template: '<div>{{scope.chartData}}</div>',
        scope: {
          title: '@',
          options: '=',
          chartData: '=',
          chartCategories: '@'
        },
        controller: HighChartsDirectiveController,
        controllerAs: 'hc',
        link: HighChartsLinkFunction
      };
    }

    function HighChartsLinkFunction(scope, element, attrs, controller) {
      var chart = Highcharts.chart(element[0], scope.options);

      chart.setTitle({ text: scope.title });
      console.log('Data in Chart');
      console.log(scope.chartData.chart);
      // console.log('Categories in Chart');
      console.log(scope.categories);
      chart.xAxis[0].setCategories(scope.categories);
      chart.series[0].setData(scope.chartData.chart);

      // scope.$watchCollection('hc.data', function (newValue, oldValue) {
      //   console.log("Old value: ", oldValue);
      //   console.log("New value: ", newValue);
      //
      // });
    }

    function HighChartsDirectiveController(){
      var hc = this;

    }

})();
