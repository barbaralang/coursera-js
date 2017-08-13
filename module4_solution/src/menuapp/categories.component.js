(
  function() {
    'use strict';
     angular.module('MenuApp')
     .component('categories', {
       restrict: 'E',
       templateUrl: 'src/menuapp/templates/categories.template.html',
       bindings: {
         categories: '<'
       }
    });
})();
