import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | creations/programs/cross-dating', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:creations/programs/cross-dating');
    assert.ok(route);
  });
});
