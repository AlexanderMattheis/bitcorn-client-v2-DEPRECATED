import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
module('Unit | Model | creations/graphics/vector graphic', function (hooks) {
    setupTest(hooks);
    // Replace this with your real tests.
    test('it exists', function (assert) {
        let store = this.owner.lookup('service:store');
        let model = run(() => store.createRecord('creations/graphics/vector-graphic', {}));
        assert.ok(model);
    });
});
//# sourceMappingURL=vector-graphic-test.js.map