(function () {

  'use strict';

  angular.module('public')
  .controller( 'signUpController', signUpController );

  signUpController.$inject = ['$http'];
  function signUpController($http){
    var signup = this;

    signup.submit = function(){
      //check if item exist and save if not display msg
      return $http({
        method: 'GET',
        url: ('https://darekr123.herokuapp.com/menu_items/' + signup.user.favorite + '.json')
      })
      .then(function successCallback(result) {
         signup.completed = true;
         signup.errorMsg = 'No such menu number exists';
         return result.data;
      }, function errorCallback(result) {
          signup.completed = false;
          signup.errorMsg = 'No such menu number exists';
      });
    }
  }

})();
