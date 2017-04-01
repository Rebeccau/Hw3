(function () {

  'use strict';

  angular.module('public')
  .controller( 'signUpController', signUpController );

  signUpController.$inject = ['signUpService'];
  function signUpController(signUpService){
    var signup = this;


    signup.submit = function(){
      var fav = signUpService.process(signup.user);
      fav.then(function successCallback(response) {
        console.log(response);
        signup.completed = true;
        signup.errorMsg = false;
      }, function errorCallback(response) {
        console.log(response);
        signup.completed = false;
        signup.errorMsg = true;
      });
    }
  }

})();
