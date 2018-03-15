'use strict';

app
  .controller('itemList', function($scope, itemProvider) {
    $scope.items = itemProvider.getItems();
  })
  .controller('itemCreate', function($scope, itemProvider, categoryProvider) {
    $scope.items = itemProvider.getItems();
    $scope.categories = categoryProvider.getCategories();

    $scope.createItem = function(item) {
      $scope.items = itemProvider.create(item);
    }
  })
  .controller('itemUpdate', function($scope) {

  })
  .controller('itemDelete', function($scope) {

  });
