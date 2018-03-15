'use strict';

app.directive('decorateItem', function() {
  return {
    template: 'item "{{item.name}} dans la catégorie {{item.category_id}}"'
  }
});
