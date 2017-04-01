(function(){
  'use strict';

  angular.module('public')
  .service( 'signUpService', signUpService );

  signUpService.$inject = ['$http', 'ApiPath'];
  function signUpService($http, ApiPath){
    var service = this;

    //save info of user

    service.process = function(user){
      service.userInfo = user;
      service.favoriteItem = user.favorite.toUpperCase()
      //check if item exist and save if not display msg
      return $http({
        method: 'GET',
        url: ( ApiPath + '/menu_items/' + service.favoriteItem + '.json')
      })
      .then(function (result) {
         service.fav = result.data;
         return result.data;
      });
    }

    service.getUserInfo = function(){
      return service.userInfo;
    }

    service.getfoodItemInfo = function(){
      return service.fav;
    }

    service.getFavItemImage = function(){
      if(service.fav){
        var image = ApiPath + '/images/' + service.fav.short_name + '.jpg';
        return image;
      }
    }

  }

})();
