(function(){
  'use strict';

  angular.module('menuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state( 'home', {
      url: '/',
      templateUrl: 'src/data/templates/home.template.html'
    })

    .state( 'categories', {
      url: '/categories',
      templateUrl: 'src/data/templates/categories.template.html',
      controller: 'categoriesController as categories',
      resolve: {
        items: [ 'menudata', function(menudata){
          return menudata.getAllCategories();
        }]
      }
    })

    .state( 'items', {
      url: '/items/{cat}',
      templateUrl: 'src/data/templates/items.template.html',
      controller: 'itemsController as list',
      // params: {
      //   cat: null
      // }
      resolve: {
        items: [ '$stateParams', 'menudata',
        function($stateParams, menudata){
          return menudata.getItemsForCategory($stateParams.cat);
        }]
      }
    });

  }

})();
