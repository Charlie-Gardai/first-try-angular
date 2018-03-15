'use strict';

app.directive('decorateCategory', function() {
  return {
    template: 'category "{{category.id}}.{{category.name}}"'
  }
});
