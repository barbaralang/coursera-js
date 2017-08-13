(
  function() {
    'use strict';
     angular.module('Data')
     .service('MenuDataService', MenuDataService);

     MenuDataService.$inject = ['ALL_CATEGORIES', 'ITEMS_FOR_CATEGORIES', '$http', '$q']
     function MenuDataService(ALL_CATEGORIES, ITEMS_FOR_CATEGORIES, $http, $q){
       var service = this;

       service.getAllCategories = function(){
         var deferred = $q.defer();
         $http({
           url: ALL_CATEGORIES,
           method: 'GET'
         })
         .then(function(categories){
           deferred.resolve(categories.data);
         })
         .catch(function(error){
           deferred.reject(error);
         });

         return deferred.promise;
       }

       service.getItemsForCategory = function (categoryShortName) {
         var deferred = $q.defer();
         $http({
           url: ITEMS_FOR_CATEGORIES,
           method: 'GET',
           parameter: {
             category: categoryShortName
           }
         })
         .then(function(items){
           deferred.resolve(items.data.menu_items);
         })
         .catch(function(error){
           deferred.reject(error);
         });

         return deferred.promise;
       }
     }
})();
