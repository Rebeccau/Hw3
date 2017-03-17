(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController( MenuSearchService ){
    var menuSearch = this;

    menuSearch.getItems = function( searchTerm ){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        //console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

    }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService( $http ){
    var service =this;

    service.getMatchedMenuItems = function(searchTerm){

      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      })
      .then(function (result) {
          // process result and only keep items that match
          //var foundItems...
          for(var i=0; i < result.data.menu_items.length; i++){
            var string = result.data.menu_items[i].description;
            if (string.indexOf(searchTerm) !=-1) {
              console.log(string);
            }
          }
          // return processed items
          return result;
      });
      //return searchTerm;
    }
  }

})();
