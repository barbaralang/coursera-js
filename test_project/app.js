(function () {
    'use strict';

  angular.module('SliderTestApp', ['rzModule'])
              .controller('FixedController', FixedController)
              .controller('RegularController', RegularController)
              .service('ChartService', ChartService)
              ;

              function FixedController($scope, ChartService){
                var fixed = this;

                fixed.slider_1 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1
                  }
                };

                fixed.slider_2 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1
                  }
                };

                fixed.slider_1.value = ChartService.getChartValues().one;
                fixed.slider_2.value = ChartService.getChartValues().two;

                fixed.values= {
                  one: fixed.slider_1.value,
                  two: fixed.slider_2.value
                }

                $scope.$on("slideEnded", function() {
                  // user finished sliding a handle

                  var values= {
                    one: fixed.slider_1.value,
                    two: fixed.slider_2.value
                  }

                  console.log(values);
                  ChartService.setParameter(values);
                });
              }

              function RegularController($scope, ChartService){
                var regular = this;

                regular.slider_1 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1
                  }
                };

                regular.slider_2 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1
                  }
                };

                regular.slider_1.value = ChartService.getChartValues().three;
                regular.slider_2.value = ChartService.getChartValues().four;

                // regular.values= {
                //   one: regular.slider_1.value,
                //   two: regular.slider_2.value
                // }

                $scope.$on("slideEnded", function() {
                  // user finished sliding a handle
                  console.log(regular);
                  // console.log(regular.values);

                  var values= {
                    three: regular.slider_1.value,
                    four: regular.slider_2.value
                  }

                  console.log(values);
                  ChartService.setParameter(values);

                });
              }

              function ChartService(){
                var chart = this;
                var chartValues = {
                  one: 20,
                  two: 30,
                  three: 40,
                  four: 50
                };

                chart.setParameter = function(parameters){
                  angular.forEach(parameters, function(value, key){
                    chartValues[key] = value;
                  });
                  console.log(chartValues);
                }

                chart.getChartValues = function(){
                  return chartValues;
                }
              }

})();
