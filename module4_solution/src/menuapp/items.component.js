(
  function() {
    'use strict';
     angular.module('MenuApp')
     .component('items', {
       restrict: 'E',
       templateUrl: 'src/menuapp/templates/items.template.html',
       bindings: {
         items: '<'
       }
    });
})();
