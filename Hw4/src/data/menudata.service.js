(function(){
  'use strict';

  angular.module( 'data' )
  .service( 'menudata', menudata );

  menudata.$inject = ['$http'];
  function menudata($http){

    var service = this;

    service.getAllCategories = function(){
      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/categories.json')
      })
      .then(function (result) {
          // process result and only keep items that match
          return result.data;
      });

    }

    service.getItemsForCategory = function(categoryShortName){
      console.log(categoryShortName);
      //this method should return a promise which is a result of using the $http service,
      //using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
      //where, before the call to the server, your code should append whatever
      //categoryShortName value was passed in as an argument into the getItemsForCategory method
      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
        params: {
          category: categoryShortName
        }
      })
      .then(function (result) {
          // process result and only keep items that match
          return result.data.menu_items;
      });
    }

  }

})();
