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
      data.dateFilter = 'day';
      data.btnKumuliert = true;

      data.setMinDate = function(minDate){
        data.minDate = minDate;
      }

      data.setMaxDate = function(maxDate){
        data.maxDate = maxDate;
      }

      data.setDateFilter = function(dateFilter){
        data.dateFilter = dateFilter;
      }

      data.setKumuliert = function(kumuliert){
        data.btnKumuliert = kumuliert;
      }

      var resolutions = {
        '5 min': 20,
        '15 min': 40,
        '30 min': 50,
        'hours': 60,
        'days': 70,
        'weeks': 2,
        'months': 3,
        'years': 4
      }

      var meters ={
        'D12': {
          power: 1627627,
          heating: 1627587,
          hotwater: 1627589
        },
        'D12_A': {
          power: 1625543
        },
        'D12_B': {
          power: 1625545
        },
        'D12_C': {
          power: 1625547
        },
        'D12_D': {
          power: 1625548
        },
        'D12_E': {
          power: 1625549
        },
        'D12_F': {
          power: 1625551
        }
      }

      var homeData = {
        'D12' : {
          'meta_data': {
            floor: 16000,
            apartments: 213,
            occupants: 300
          },
          'values': {
            power: 1234,
            heating: 2414,
            hotWater: 28,
            coldWater: 42
          }
        },
        'D10' : {
          'meta_data': {
            floor: 25000,
            apartments: 313,
            occupants: 430
          },
          'values': {
            power: 1850,
            heating: 3760,
            hotWater: 42,
            coldWater: 63
          }
        },
        'D08' : {
          'meta_data': {
            floor: 8000,
            apartments: 50,
            occupants: 120
          },
          'values': {
            power: 734,
            heating: 944,
            hotWater: 11,
            coldWater: 17
          }
        }
      }

      var currentHomeData = angular.copy(homeData);

      var detailData = {
        'A' : {
          'meta_data': {
            floor: 4000,
            apartments: 60,
            occupants: 75
          },
          'values': {
            power: 300,
            heating: 350,
            hotWater: 7,
            coldWater: 11
          }
        },
        'B' : {
          'meta_data': {
            floor: 4000,
            apartments: 78,
            occupants: 75
          },
          'values': {
            power: 350,
            heating: 370,
            hotWater: 10,
            coldWater: 16
          }
        },
        'C' : {
          'meta_data': {
            floor: 4000,
            apartments: 74,
            occupants: 80
          },
          'values':{
            power: 320,
            heating: 355,
            hotWater: 11,
            coldWater: 17
          }
        }
      }

      var currentDetailData = angular.copy(detailData);

      function init(){
        console.log('init');
        var tmp = angular.copy(homeData);

        var floor;
        var occupants;
        var apartments;

        homeData.total = {};
        angular.forEach(tmp, function(obj, key) {
            floor =+ obj.floor;
            occupants =+ obj.occupants;
            apartments =+ obj.apartments;
        });

        homeData.total.floor = floor;
        homeData.total.occupants = occupants;
        homeData.total.apartments = apartments;
      }

      init();

      data.getHomeData = function() {
        return homeData;
      }

      data.getCurrentHomeData = function() {
        return currentHomeData;
      }

      data.resetCurrentHomeData = function(){
        currentHomeData = angular.copy(homeData);
      }

      data.getDetailData = function() {
        return detailData;
      }

      data.getCurrentDetailData = function() {
        return currentDetailData;
      }

      data.resetCurrentDetailData = function(){
        currentDetailData = angular.copy(detailData);
      }

      data.setSubnetFilter = function(subnetFilter, type){
        data.subnetFilter = subnetFilter;
        if(type == 'detail'){
          data.filterDetailSubnet();
        }else{
          data.filterHomeSubnet();
        }
      }

      data.setEnergyTypeFilter = function(energyTypeFilter, type){
        data.energyTypeFilter = energyTypeFilter;
        if(type == 'detail'){
          data.filterDetailEnergyType();
        }else{
          data.filterHomeEnergyType();
        }
      }

      data.filterHomeSubnet = function(){
        data.filterSubnet(data.getHomeData(), data.getCurrentHomeData());
      }

      data.filterDetailSubnet = function(){
        data.filterSubnet(data.getDetailData(), data.getCurrentDetailData());
      }

      data.filterHomeEnergyType = function(){
        data.filterEnergyType(data.getHomeData(), data.getCurrentHomeData());
      }

      data.filterDetailEnergyType = function(){
        data.filterEnergyType(data.getDetailData(), data.getCurrentDetailData());
      }

      data.filterSubnet = function(subnetData, currentSubnetData){
        angular.forEach(data.subnetFilter, function(filter, subnet){
            console.log('subnet: ' + subnet + ' filter: ' + filter);
          if(filter != null){
            console.log(subnetData[subnet].values);
            angular.forEach(subnetData[subnet].values, function(value, energyType){
              console.log('subnet: ' + subnet + ' filter: ' + filter + ' energyType: ' + energyType + ' value: ' + value);
              currentSubnetData[subnet]['values'][energyType] = Math.round(value / filter);
              console.log(currentSubnetData);
            });
          }else{ // filter unchecked
            angular.forEach(subnetData[subnet].values, function(value, energyType){
              console.log('subnet: ' + subnet + ' filter: ' + filter + ' energyType: ' + energyType + ' value: ' + value);
              currentSubnetData[subnet]['values'][energyType] = subnetData[subnet]['values'][energyType];
              console.log(currentSubnetData);
            });
          }
        });

      }

      data.filterEnergyType = function(energyTypeData, currentEnergyTypeData){
        angular.forEach(data.energyTypeFilter, function(filter, energyType){
          console.log('energyType: ' + energyType + ' filter: ' + filter);
          if(filter != null){
            angular.forEach(energyTypeData, function(item, subnet){
              if(subnet !== 'total'){
                console.log('item: ' + JSON.stringify(item) + ' subnet: ' + subnet);
                var value = item['values'][energyType];
                var myfilter = energyTypeData[subnet]['meta_data'][filter];
                currentEnergyTypeData[subnet]['values'][energyType] = Math.round(value / myfilter);
                console.log(currentEnergyTypeData);
              }
            });
          }else{ // filter unchecked
            angular.forEach(currentEnergyTypeData, function(item, subnet){
              if(subnet !== 'total'){
                console.log('item: ' + JSON.stringify(item) + ' subnet: ' + subnet);
                currentEnergyTypeData[subnet]['values'][energyType] = energyTypeData[subnet]['values'][energyType];
                console.log(currentEnergyTypeData);
              }
            });
          }
        });
      }

      data.getDetailData = function(subnet) {
        // detailData.subnet = subnet;
        return detailData;
      }

      data.getCurrentDetailData = function(subnet) {
        return detailCurrentData;
      }
    }

})();
