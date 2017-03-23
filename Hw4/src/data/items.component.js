(function () {
'use strict';

angular.module('menuApp')
.component('items', {
  templateUrl: 'src/data/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
