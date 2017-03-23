(function(){
  'use strict';

  angular.module('data')
  .controller('categoriesController', categoriesController);

  categoriesController.$inject = ['menudata', 'items'];
  function categoriesController(menudata, items){
    var categories = this;
    categories.items = items;
  }

})();
