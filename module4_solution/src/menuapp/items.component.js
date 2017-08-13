(
  function() {
    'use strict';
     angular.module('MenuApp')
     .service('items', ItemsComponent);

     ItemsComponent.$inject = []
     function ItemsComponent(){
       var items = this;
     }
})();
