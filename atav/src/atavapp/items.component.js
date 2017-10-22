(
  function() {
    'use strict';
     angular.module('AtavApp')
     .component('items', {
       restrict: 'E',
       templateUrl: 'src/menuapp/templates/items.template.html',
       bindings: {
         items: '<'
       }
    });
})();
