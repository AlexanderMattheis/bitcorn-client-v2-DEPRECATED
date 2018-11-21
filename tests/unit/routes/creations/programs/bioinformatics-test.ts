import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | creations/programs/bioinformatics', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:creations/programs/bioinformatics');
    assert.ok(route);
  });
});
