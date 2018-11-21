import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tutorials/design/blender', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tutorials/design/blender');
    assert.ok(route);
  });
});
