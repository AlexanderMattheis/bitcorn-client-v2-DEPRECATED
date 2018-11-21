import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tutorials/design/inkscape', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tutorials/design/inkscape');
    assert.ok(route);
  });
});
