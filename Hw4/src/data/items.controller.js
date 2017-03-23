(function(){
  'use strict';

  angular.module('data')
  .controller('itemsController', itemsController);

  itemsController.$inject = ['menudata', 'items'];
  function itemsController(menudata, items){
    var list = this;
    list.items = items;
    console.log(list.items);
  }

})();
