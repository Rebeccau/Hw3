(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems);

  function foundItems(){
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: foundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
    }
    return ddo;
  }

  function foundItemsDirectiveController(){
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController( MenuSearchService ){
    var menuSearch = this;

    menuSearch.getItems = function( searchTerm ){

      if(searchTerm){
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {
          if(response.length){
            menuSearch.found = response;
            menuSearch.message = "";
            console.log(menuSearch.found);
          }else{
            menuSearch.message = "nothing was found!";
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }else{ //textbox was left empty
        menuSearch.found.length = 0;
        menuSearch.message = "nothing was found!";
      }
    }

    menuSearch.removeItem = function( index ){
      MenuSearchService.removeItem(index);
    }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService( $http ){
    var service =this;

    var foundItems = [];

    service.getMatchedMenuItems = function(searchTerm){

      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      })
      .then(function (result) {
          // process result and only keep items that match
          foundItems.length = 0;
          for(var i=0; i < result.data.menu_items.length; i++){
            var string = result.data.menu_items[i].description;
            if (string.indexOf(searchTerm) !=-1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items 
          return foundItems;
      });
    }

    service.removeItem = function(index){
      foundItems.splice( index, 1 );
    }
  }

})();
