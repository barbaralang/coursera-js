(
  function() {
    'use strict';
     angular.module('AtavApp')
     .component('categories', {
       restrict: 'E',
       templateUrl: 'src/menuapp/templates/categories.template.html',
       bindings: {
         categories: '<'
       }
    });
})();
