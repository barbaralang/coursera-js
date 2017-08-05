(
  function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var toBuy = this;
      toBuy.items = ShoppingListCheckOffService.getToBuy();

      toBuy.buyItem = function(index, item){
        ShoppingListCheckOffService.removeToBuy(index);
        ShoppingListCheckOffService.addBought(item);
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;
      alreadyBought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService(){
      var service = this;
      var toBuy = [
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 20 },
        { name: "cookies", quantity: 30 },
        { name: "cookies", quantity: 40 },
        { name: "cookies", quantity: 50 }
      ];
      var bought = [];

      // to buy
      service.getToBuy = function() {
        return toBuy;
      }

      service.addToBuy = function(item) {
        toBuy.push(item);
      }

      service.removeToBuy = function(index) {
        toBuy.splice(index, 1);
      }

      // bought

      service.getBought = function() {
        return bought;
      }

      service.addBought = function(item) {
        bought.push(item);
      }

      service.removeBought = function(index) {
        bought.splice(index, 1);
      }

    }

  })();
