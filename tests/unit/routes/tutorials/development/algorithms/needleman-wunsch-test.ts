import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tutorials/development/algorithms/needleman-wunsch', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tutorials/development/algorithms/needleman-wunsch');
    assert.ok(route);
  });
});
