import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Helper | eq', function (hooks) {
    setupRenderingTest(hooks);
    // Replace this with your real tests.
    test('equality of numbers', async function (assert) {
        this.set('a', 12);
        this.set('b', 12);
        await render(hbs `{{eq a b}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), "true");
    });
    test('equality of strings', async function (assert) {
        this.set('a', "Sophie");
        this.set('b', "Sophie");
        await render(hbs `{{eq a b}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), "true");
    });
    test('inequality of strings', async function (assert) {
        await render(hbs `{{eq "Sophie" "Sophia"}}`);
        // @ts-ignore
        assert.equal(this.element.textContent.trim(), "false");
    });
});
//# sourceMappingURL=eq-test.js.map