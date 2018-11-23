import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | repeat', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('generating numbers 5 up to 12', async function (assert) {
        this.set('start', 5);
        this.set('end', 12);
        await render(hbs `{{repeat start end}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), "5,6,7,8,9,10,11,12");
    });
});
//# sourceMappingURL=repeat-test.js.map