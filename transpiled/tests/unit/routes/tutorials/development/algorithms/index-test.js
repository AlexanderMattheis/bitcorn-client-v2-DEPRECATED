import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
module('Unit | Route | tutorials/development/algorithms/index', function (hooks) {
    setupTest(hooks);
    test('it exists', function (assert) {
        let route = this.owner.lookup('route:tutorials/development/algorithms/index');
        assert.ok(route);
    });
});
//# sourceMappingURL=index-test.js.map