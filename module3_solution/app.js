(
  function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
      var narrow = this;

      narrow.getMatchedMenuItems = function(){
        console.log('get menu for ' + narrow.searchTerm);
        MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(
          function(result){
            narrow.found = result;
          }
        );
      }

      narrow.removeItem = function(index){
        narrow.found.splice(index, 1);
      }
    }

    MenuSearchService.$inject = ['$http', '$q'];
    function MenuSearchService($http, $q) {
      var service = this;

      service.getMatchedMenuItems = function(searchTerm){
        var deffered = $q.defer();
        return $http({
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
          method: 'GET'
        })
          .then(function (result) {
            // process result and only keep items that match
            var foundItemsArray = [];
            angular.forEach(result.data.menu_items, function(item) {
              if(item.description.indexOf(searchTerm) !== -1){
                foundItemsArray.push(item);
              }
            });
            deffered.resolve(foundItemsArray);
            var foundItems = deffered.promise;
            // return processed items
            return foundItems;
          }
        );
      }
    }

    function FoundItemsDirective(){
      var ddo = {
        restrict: 'E',
        templateUrl: 'foundItems.html',
        scope: {
          foundItems: '<found',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'found',
        bindToController: true
      };

      return ddo;
    }

    function FoundItemsDirectiveController(){
      var found = this;
      console.log(this);
      console.log(found.foundItems);
    }

})();
