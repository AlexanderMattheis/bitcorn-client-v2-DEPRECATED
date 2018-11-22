import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | add', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('addition', async function(assert) {
    this.set('a', 5);
    this.set('b', 7);

    await render(hbs`{{add a b}}`);

    // @ts-ignore
    assert.equal(this.element.textContent.trim(), "12");
  });
});
