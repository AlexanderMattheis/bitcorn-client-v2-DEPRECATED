import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | get-char-at', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('it renders', async function (assert) {
        this.set('inputValue', '1234');
        await render(hbs `{{get-char-at inputValue}}`);
        assert.equal(this.element.textContent.trim(), '1234');
    });
});
//# sourceMappingURL=get-char-at-test.js.map