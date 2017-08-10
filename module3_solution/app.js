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

      var nothing = "Nothing found";

      narrow.getMatchedMenuItems = function(){
        narrow.error = "";
        narrow.found = [];
        if(narrow.searchTerm){

          // console.log('get menu for ' + narrow.searchTerm);
          MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(
            function(result){
              if(result.length > 0){
                narrow.error = "";
                narrow.found = result;
              }else{
                narrow.error = nothing;
              }
              // console.log(narrow.found);
            }
          );
        }else{
          narrow.error = nothing;
        }
      }

      narrow.removeItem = function(index){
        narrow.found.splice(index, 1);
      }
    }

    MenuSearchService.$inject = ['$http', '$q'];
    function MenuSearchService($http, $q) {
      var service = this;

      service.getMatchedMenuItems = function(searchTerm){
        var defered = $q.defer();
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
            defered.resolve(foundItemsArray);
            var foundItems = defered.promise;
            // return processed items
            return foundItems;
          }
        );
      }
    }

    function FoundItemsDirective(){
      var ddo = {
        restrict: 'E', // otherwise it won't work, because the element AND an attribute are called 'found-items'
        templateUrl: 'foundItems.html',
        scope: {
          found: '<foundItems',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };

      return ddo;
    }

    function FoundItemsDirectiveController(){
      var found = this;
      // console.log(this);
      // console.log(found.foundItems);
    }

})();
