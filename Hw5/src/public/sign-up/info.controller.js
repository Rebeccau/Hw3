(function(){
  'use strict';

  angular.module('public')
  .controller('infoController', infoController);

  infoController.$inject = ['signUpService'];
  function infoController(signUpService){
    var info = this;

    info.userInformation = signUpService.getUserInfo();
    if( info.userInformation ){
      info.infoExists = true;
    }else{
      info.infoExists = false;
    }

    info.favItem = signUpService.getfoodItemInfo();

    info.image = signUpService.getFavItemImage();
  }

})();
