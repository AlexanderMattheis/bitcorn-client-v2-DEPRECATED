import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | imprint', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:imprint');
    assert.ok(route);
  });
});
