(
  function() {
    'use strict';

    angular.module('AspernDashboardApp').service('DataService', DataService);

    DataService.$inject=[];
    function DataService(){
      var data = this;

      var energyTypes = ['power', 'heating', 'hotWater', 'coldWater'];
      data.minDate = moment(new Date()).startOf('month').toDate();
      data.maxDate = moment(new Date()).toDate();

      var homeData = {
        'D12' : {
          floor: 16000,
          apartments: 213,
          occupants: 300,
          power: 1234,
          heating: 2414,
          hotWater: 28,
          coldWater: 42
        },
        'D10' : {
          floor: 25000,
          apartments: 313,
          occupants: 430,
          power: 1850,
          heating: 3760,
          hotWater: 42,
          coldWater: 63
        },
        'D08' : {
          floor: 8000,
          apartments: 50,
          occupants: 120,
          power: 734,
          heating: 944,
          hotWater: 11,
          coldWater: 17
        }
      }

      var currentHomeData = angular.copy(homeData);

      var detailData = {
        'A' : {
          floor: 4000,
          apartments: 60,
          occupants: 75,
          power: 300,
          heating: 350,
          hotWater: 7,
          coldWater: 11
        },
        'B' : {
          floor: 4000,
          apartments: 78,
          occupants: 75,
          power: 350,
          heating: 370,
          hotWater: 10,
          coldWater: 16
        },
        'C' : {
          floor: 4000,
          apartments: 74,
          occupants: 80,
          power: 320,
          heating: 355,
          hotWater: 11,
          coldWater: 17
        }
      }

      var currentDetailData = angular.copy(detailData);

      data.getHomeData = function() {
        return homeData;
      }

      data.getCurrentHomeData = function(params) {
        console.log(params);
        if(params != null){
          var filter_array = params.split('_');
          var filterName = filter_array[0];
          var filterProperty = filter_array[1];
          var filterValue;

          if(homeData.hasOwnProperty(filterName)){
            filterValue = homeData.filterName.filterProperty;
            angular.forEach(homeData.filterName, function(value, key) {
              var newValue = null;
              if(energyTypes.indexOf(key) !== -1){
                newValue = value / filterValue;
                console.log('new Value: ' + newValue);
                currentHomeData.filterName.key = newValue;
              }
            }, item);
          }
          if(params.hasOwnProperty('energyType')){
            var energyType = params.energyType;
            var origData = DataService.getHomeData();
            angular.forEach(origData, function(value, key) {
              var filterValue = origData[key][filter];
              var newValue = value.energyType / filterValue;
              currentHomeData.key.energyType = newValue;
            }, item);

          }
          else if(params.hasOwnProperty('subnet')){
            var subnet = params.subnet;
          }
        }
        return currentHomeData;
      }

      data.getDetailData = function(subnet) {
        // detailData.subnet = subnet;
        return detailData;
      }

      data.getCurrentDetailData = function(subnet) {
        return detailCurrentData;
      }

      // var start = 0;
      // var end = 100;
      //
      // // TODO get data from remote service
      // var parameter = {
      //   tenants: 60,
      //   floor: 70,
      //   solar: 30,
      //   water: 40,
      //   pv: 20,
      //   battery: 10
      // }
      //
      // var categories = [
      //   'tenants', 'floor', 'solar', 'water', 'pv', 'battery'
      // ];
      //
      // var title = 'Chart';
      //
      // var result = [];
      //
      //   var data = {
      //     parameters: parameter,
      //     data: [
      //     ],
      //     results: result
      //   }
      //
      //   function init(){
      //     console.log('init data data');
      //     data.data.length = 0;
      //     console.log(data.parameters);
      //     console.log(data.results);
      //     var i = 0;
      //     calculateChart();
      //     console.log(JSON.stringify(data.results));
      //   }
      //
      //   init();
      //
      //   data.updateSlider = function(index, value){
      //     data.parameters[index] = value;
      //     console.log(data.parameters);
      //     // data.data[categories.indexOf(index)] = value;
      //     // console.log(data.data);
      //     // data.results[index] = data.data[categories.indexOf(index)] * (categories.indexOf(index)+1);
      //     calculateChart();
      //     console.log(JSON.stringify(data.results));
      //   }
      //
      //   function calculateChart(){
      //     data.results.length = 0;
      //     data.data.length = 0;
      //     angular.forEach(numberRange(start, end), function(x){
      //       // var y = data.parameters.tenants + data.parameters.floor /( data.parameters.solar * x + data.parameters.water * (x) + data.parameters.pv * (x) + data.parameters.battery * (x));
      //       // var y = (data.parameters.tenants + data.parameters.floor) + (Math.pow(x,2) / ( data.parameters.solar + data.parameters.water + data.parameters.pv + data.parameters.battery));
      //       var y = data.parameters.tenants - data.parameters.floor/150 * x + (Math.pow(x,2)/25 * ( data.parameters.solar + data.parameters.water + data.parameters.pv + data.parameters.battery) /400);
      //       var point = [x,y];
      //       // data.results.push(point);
      //       data.data.push(point);
      //     });
      //
      //     angular.forEach(categories, function(value){
      //       // console.log(data.parameters[value]);
      //       data.results[value] = data.parameters[value] * (categories.indexOf(value)+1);
      //     });
      //   }
      //
      //   function numberRange (start, end) {
      //     return new Array(end - start).fill().map((d, i) => i + start);
      //   }
      //
      //   data.getTitle = function(){
      //     return title;
      //   }
      //
      //   data.getData = function(){
      //     return data;
      //   }
      //
      //   data.getCategories = function(){
      //     return categories;
      //   }
      //
      //   data.getResult = function(){
      //     return result;
      //   }

    }

})();
