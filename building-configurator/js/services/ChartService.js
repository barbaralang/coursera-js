(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp').service('ChartService', ChartService);

    ChartService.$inject=[];
    function ChartService(){
      var chart = this;


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

      var title = 'Building Configuration';

      var result = {}

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
          var i = 0;
          angular.forEach(categories, function(value){
            // console.log(data.parameters[value]);
            data.chart.push(data.parameters[value]);
            data.results[value] = data.chart[categories.indexOf(value)] * categories.indexOf(value);
          });
        }

        init();

        chart.updateSlider = function(index, value){
          data.parameters[index] = value;
          console.log(data.parameters);
          data.chart[categories.indexOf(index)] = value;
          console.log(data.chart);
          data.results[index] = data.chart[categories.indexOf(index)] * categories.indexOf(index);
          console.log(data.results);
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
