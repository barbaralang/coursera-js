(
  function() {
    'use strict';

    angular.module('BuildingConfiguratorApp').service('ChartService', ChartService);

    ChartService.$inject=[];
    function ChartService(){
      var chart = this;

      // var parameter = {
      //   tenants: 60,
      //   floor: 70,
      //   solar: 30,
      //   water: 40,
      //   pv: 20,
      //   battery: 10
      // }
      //
      //   var chartValues = [];
      //   chartValues[0] = chart.data.parameters.tenants;
      //   chartValues[1] = parameter.floor;
      //   chartValues[2] = parameter.solar;
      //   chartValues[3] = parameter.water;
      //   chartValues[4] = parameter.pv;
      //   chartValues[5] = parameter.battery;
      //   console.log(chartValues);

        chart.data = {
          parameters: {
            tenants: 60,
            floor: 70,
            solar: 30,
            water: 40,
            pv: 20,
            battery: 10
          },
          chart: [
          ]
        }

        chart.data.chart = [
          chart.data.parameters.tenants,
          chart.data.parameters.floor,
          chart.data.parameters.solar,
          chart.data.parameters.water,
          chart.data.parameters.pv,
          chart.data.parameters.battery
        ]

        // function fillChartValues(){
        //   chartValues.length = 0;
        //   angular.forEach(parameter, function(value, key){
        //     chartValues.push(value);
        //   });
        //   console.log(chartValues);
        // }
        //
        // fillChartValues();

      // function fillChartValues(){
      //   chartValues.length = 0;
      //   chartValues.push(parameter.tenants);
      //   chartValues.push(parameter.floor);
      //   chartValues.push(parameter.solar);
      //   chartValues.push(parameter.water);
      //   chartValues.push(parameter.pv);
      //   chartValues.push(parameter.battery);
      //   console.log(chartValues);
      // }
      //
      // function createChartValues(){
      //   chartValues.length = 0;
      //   var values = Object.keys(parameter).map(function (key) { return parameter[key]; });
      //   angular.forEach(values, function(value, key)){
      //     chartValues[key] = value;
      //   }
      // }
      //
      // fillChartValues();

      var i = 0;
      chart.setParameter = function(parameters){
        // angular.forEach(parameters, function(value, key){
        //   parameter[key] = value;
        // });
        // console.log(parameter);
        // fillChartValues();
          i++;
        if(parameters.tenants != null) chart.data.parameters.tenants = parameters.tenants;
        if(parameters.floor != null) chart.data.parameters.floor = parameters.floor;
        if(parameters.solar != null) chart.data.parameters.solar = parameters.solar;
        if(parameters.water != null) chart.data.parameters.water = parameters.water;
        if(parameters.pv != null) chart.data.parameters.pv = parameters.pv;
        if(parameters.battery != null) chart.data.parameters.battery = parameters.battery;
      }

      chart.getParameter = function(){
        return chart.data.parameters;
      }


      chart.getChartValues = function(){

        // chartValues.push(i);
        return chartValues;
      }

      // $scope.$watch('chartValues', function(newValue, oldValue){
      //   console.log('chartValues changed to ' + newValue);
      // });

      // var fixedParameters = {
      //   tenants: chartParameters.tenants,
      //   floor: chartParameters.floor
      // }
      //
      // var regularParameters = {
      //   solar: chartParameters.solar,
      //   water: chartParameters.water,
      //   pv: chartParameters.pv,
      //   battery: chartParameters.battery
      // }
      //
      // var dataArray = [
      //   chartParameters.tenants,
      //   chartParameters.floor,
      //   chartParameters.solar,
      //   chartParameters.water,
      //   chartParameters.pv,
      //   chartParameters.battery
      // ];
      //
      // // var dataArray = [];
      //
      // // function init(){
      // //   angular.forEach(chartParameters, function(value, key){
      // //     dataArray.push(value);
      // //   });
      // // }
      // //
      // // init();
      //
      // chart.updateChart = function(parameters){
      //   console.log('update chart in service');
      //
      //   var i = 0;
      //   angular.forEach(chartParameters, function(value, key){
      //     dataArray[i] = value;
      //     i++;
      //   });
      //
      //   console.log('Data Array after update');
      //   console.log(dataArray);
      //
      //   console.log(chart.getChartData());
      //
      //   // TODO send request to backend
      // }
      //
      // chart.setParameters = function(parameters){
      //   // console.log(parameters);
      //   angular.forEach(parameters, function(value, key) {
      //     console.log('value: ' + value + ', key: ' + key);
      //     chartParameters[key] = value;
      //
      //   });
      //
      //   console.log('Parameters after update');
      //   console.log(chartParameters);
      //
      //   chart.updateChart(chartParameters);
      // }
      //
      // chart.setFixedParameters = function(parameters){
      //   chart.fixedParameters = angular.copy(parameters);
      // }
      //
      // chart.setRegularParameters = function(parameters){
      //   chart.regularParameters = angular.copy(parameters);
      // }
      //
      // chart.getParameters = function(){
      //   // TODO send request to backend ?
      //   return chartParameters;
      // }
      //
      // chart.getFixedParameters = function(){
      //   // TODO send request to backend ?
      //   return fixedParameters;
      // }
      //
      // chart.getRegularParameters = function(){
      //   // TODO send request to backend ?
      //   return regularParameters;
      // }
      //
      // chart.getChartData = function(){
      //   // TODO get data from backend
      //   // console.log('Chart Data');
      //   // console.log(dataArray);
      //   return dataArray;
      // }

    }

})();
