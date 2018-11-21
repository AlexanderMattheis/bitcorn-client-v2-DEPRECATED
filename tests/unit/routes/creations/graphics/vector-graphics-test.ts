import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | creations/graphics/vector-graphics', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:creations/graphics/vector-graphics');
    assert.ok(route);
  });
});
