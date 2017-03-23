(function () {
'use strict';

angular.module('menuApp')
.component('categories', {
  templateUrl: 'src/data/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
