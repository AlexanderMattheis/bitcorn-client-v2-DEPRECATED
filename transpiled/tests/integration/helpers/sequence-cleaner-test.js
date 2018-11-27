import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | sequence-cleaner', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('it renders', async function (assert) {
        this.set('inputValue', '1234');
        await render(hbs `{{sequence-cleaner inputValue}}`);
        assert.equal(this.element.textContent.trim(), '1234');
    });
});
//# sourceMappingURL=sequence-cleaner-test.js.map