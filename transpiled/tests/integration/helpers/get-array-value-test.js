import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | get-array-value', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('it renders', async function (assert) {
        this.set('inputValue', '1234');
        await render(hbs `{{get-array-value inputValue}}`);
        assert.equal(this.element.textContent.trim(), '1234');
    });
});
//# sourceMappingURL=get-array-value-test.js.map