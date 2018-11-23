import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | html-safe', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('html-link rendering', async function (assert) {
        this.set('inputValue', '<a href="index.html">Test</a>');
        await render(hbs `{{html-safe inputValue}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), 'Test');
    });
});
//# sourceMappingURL=html-safe-test.js.map