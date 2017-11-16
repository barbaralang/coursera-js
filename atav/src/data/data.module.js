(
  function() {
    'use strict';
     angular.module('Data', [])
     .constant('ALL_CATEGORIES', 'https://davids-restaurant.herokuapp.com/categories.json')
     .constant('ITEMS_FOR_CATEGORIES', 'https://davids-restaurant.herokuapp.com/menu_items.json');
})();
