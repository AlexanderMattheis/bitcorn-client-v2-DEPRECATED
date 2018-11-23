import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | geq', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('greater-equal numbers', async function (assert) {
        await render(hbs `{{geq 5 4}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), 'true');
    });
});
//# sourceMappingURL=geq-test.js.map