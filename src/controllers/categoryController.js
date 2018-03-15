'use strict';

app
  .controller('categoryList', function($scope, categoryProvider) {
    $scope.categories = categoryProvider.getCategories();
  })
  .controller('categoryCreate', function($scope) {
    $scope.categories = categoryProvider.getCategories();

    $scope.createCategory = function(category) {
      $scope.items = itemProvider.create(category);
    }
  })
  .controller('categoryUpdate', function($scope) {

  })
  .controller('categoryDelete', function($scope) {

  });
