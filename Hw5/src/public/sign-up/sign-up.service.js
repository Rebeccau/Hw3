(function(){
  'use strict';

  angular.module('public')
  .service( 'signUpService', signUpService );

  signUpService.$inject = ['$http'];
  function signUpService($http){
    var service = this;

    //save info of user

    service.process = function(user){
      service.userInfo = user;
      //check if item exist and save if not display msg
      return $http({
        method: 'GET',
        url: ('https://darekr123.herokuapp.com/menu_items/' + user.favorite + '.json')
      })
      .then(function (result) {
         return result.data;
      });
    }

  }

})();
