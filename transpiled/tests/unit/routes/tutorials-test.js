import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
module('Unit | Route | tutorials', function (hooks) {
    setupTest(hooks);
    test('it exists', function (assert) {
        let route = this.owner.lookup('route:tutorials');
        assert.ok(route);
    });
});
//# sourceMappingURL=tutorials-test.js.map