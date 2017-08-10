(function () {
    'use strict';

  angular.module('SliderTestApp', ['rzModule'])
              .controller('FixedController', FixedController)
              .controller('RegularController', RegularController)
              .service('ChartService', ChartService)
              .service('ArrayService', ArrayService)
              ;

              function FixedController($scope, ChartService, ArrayService){
                var fixed = this;

                fixed.slider_1 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1,
                    id: 'one',
                    onStart: function(id) {
                      console.log('on start ' + id); // logs 'on start slider-id'
                    },
                    onChange: function(id) {
                      console.log('on change ' + id); // logs 'on change slider-id'
                    },
                    onEnd: function(id) {
                      console.log('on end ' + id); // logs 'on end slider-id'
                      ChartService.updateSlider(id, regular.slider_1.value);
                    }
                  }
                };

                fixed.slider_2 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1,
                    id: 'two',
                    onStart: function(id) {
                      console.log('on start ' + id); // logs 'on start slider-id'
                    },
                    onChange: function(id) {
                      console.log('on change ' + id); // logs 'on change slider-id'
                    },
                    onEnd: function(id) {
                      console.log('on end ' + id); // logs 'on end slider-id'
                      ChartService.updateSlider(id, regular.slider_2.value);
                    }
                  }
                };

                fixed.slider_1.value = ChartService.getParameter().one;
                fixed.slider_2.value = ChartService.getParameter().two;

                fixed.values= {
                  one: fixed.slider_1.value,
                  two: fixed.slider_2.value
                }

                fixed.data = ChartService.data;

                fixed.items = ArrayService.getItems();
                console.log(fixed.items);


                var item = {
                  name: 'neu', q: 2
                }

                ArrayService.addItem(item);
                console.log(fixed.items);

                // ArrayService.changeItems();
                // console.log(fixed.items);

                fixed.data = ArrayService.getData();
                console.log(fixed.data);

                ArrayService.changeData();
                console.log(fixed.data);

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
                    step: 1,
                    id: 'three',
                    onStart: function(id) {
                      console.log('on start ' + id); // logs 'on start slider-id'

                    },
                    onChange: function(id) {
                      console.log('on change ' + id); // logs 'on change slider-id'
                    },
                    onEnd: function(id) {
                      console.log('on end ' + id); // logs 'on end slider-id'
                      ChartService.updateSlider(id, regular.slider_1.value);
                    }
                  }
                };

                regular.slider_2 = {
                  value: 0,
                  options: {
                    floor: 0,
                    ceil: 100,
                    step: 1,
                    id: 'four',
                    onStart: function(id) {
                      console.log('on start ' + id); // logs 'on start slider-id'
                    },
                    onChange: function(id) {
                      console.log('on change ' + id); // logs 'on change slider-id'
                    },
                    onEnd: function(id) {
                      console.log('on end ' + id); // logs 'on end slider-id'
                      ChartService.updateSlider(id, regular.slider_2.value);
                    }
                  }
                };

                function updateSlider(index, value){
                  ChartService.updateSlider(index, value);
                }

                regular.slider_1.value = ChartService.getParameter().three;
                regular.slider_2.value = ChartService.getParameter().four;

                // regular.values= {
                //   one: regular.slider_1.value,
                //   two: regular.slider_2.value
                // }

                regular.data = ChartService.getData();

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
                var parameter = {
                  one: 20,
                  two: 30,
                  three: 40,
                  four: 50
                };

                var categories = [
                  'one', 'two', 'three', 'four'
                ];

                var chartValues = [];

                var data = {
                  p: parameter,
                  c: [1,2,3,4]
                }

                chart.updateSlider = function(index, value){
                  data.p[index] = value;
                  console.log(data.p);
                }

                chart.setParameter = function(pars){
                  chartValues.splice(0, chartValues.length-1);
                  angular.forEach(pars, function(value, key){
                    data.p[key] = value;
                    // chartValues.push(value);
                    console.log(categories.indexOf(key));
                    data.c[categories.indexOf(key)] = value;
                  });
                  console.log(data.p);
                  console.log(data.c);
                  // chart.data.c = chartValues;
                }

                chart.getParameter = function(){
                  return parameter;
                }

                chart.getData = function(){
                  return data;
                }
              }

              function ArrayService(){
                var arr = this;

                var items = [
                    {name: 1, q: 1},
                    {name: 2, q: 2}
                ];

                var data = {
                  items: items,
                  q: [
                    1, 2, 3
                  ]
                }

                arr.getItems = function(){
                  return items;
                }

                arr.changeItems = function(){
                  items[0].name = "changed";
                }

                arr.addItem = function(item){
                    items.push(item);
                }

                arr.getData = function(){
                  return data;
                }

                arr.changeData = function(){
                  data.items[0]['name'] = "changed";
                  data.items[0]['q'] = 4;
                  data.q.push(19);
                  data.q[2] = 20;
                }



                }


})();
