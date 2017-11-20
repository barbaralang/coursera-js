(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp').service('ChartService', ChartService);

    ChartService.$inject=[];
    function ChartService(){
      var chart = this;

      var start = 0;
      var end = 100;

      // TODO get data from remote service
      var parameter = {
        tenants: 60,
        floor: 70,
        solar: 30,
        water: 40,
        pv: 20,
        battery: 10
      }

      var categories = [
        'tenants', 'floor', 'solar', 'water', 'pv', 'battery'
      ];

      var title = 'Chart';

      var result = [];

        var data = {
          parameters: parameter,
          chart: [
          ],
          results: result
        }

        function init(){
          console.log('init chart data');
          data.chart.length = 0;
          console.log(data.parameters);
          console.log(data.results);
          var i = 0;
          calculateChart();
          console.log(JSON.stringify(data.results));
        }

        init();

        chart.updateSlider = function(index, value){
          data.parameters[index] = value;
          console.log(data.parameters);
          // data.chart[categories.indexOf(index)] = value;
          // console.log(data.chart);
          // data.results[index] = data.chart[categories.indexOf(index)] * (categories.indexOf(index)+1);
          calculateChart();
          console.log(JSON.stringify(data.results));
        }

        function calculateChart(){
          data.results.length = 0;
          data.chart.length = 0;
          angular.forEach(numberRange(start, end), function(x){
            // var y = data.parameters.tenants + data.parameters.floor /( data.parameters.solar * x + data.parameters.water * (x) + data.parameters.pv * (x) + data.parameters.battery * (x));
            // var y = (data.parameters.tenants + data.parameters.floor) + (Math.pow(x,2) / ( data.parameters.solar + data.parameters.water + data.parameters.pv + data.parameters.battery));
            var y = data.parameters.tenants - data.parameters.floor/150 * x + (Math.pow(x,2)/25 * ( data.parameters.solar + data.parameters.water + data.parameters.pv + data.parameters.battery) /400);
            var point = [x,y];
            // data.results.push(point);
            data.chart.push(point);
          });

          angular.forEach(categories, function(value){
            // console.log(data.parameters[value]);
            data.results[value] = data.parameters[value] * (categories.indexOf(value)+1);
          });
        }

        function numberRange (start, end) {
          return new Array(end - start).fill().map((d, i) => i + start);
        }

        chart.getTitle = function(){
          return title;
        }

        chart.getData = function(){
          return data;
        }

        chart.getCategories = function(){
          return categories;
        }

        chart.getResult = function(){
          return result;
        }

    }

})();
