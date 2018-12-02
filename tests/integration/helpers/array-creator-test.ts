import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | array-creator', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 'ACGT');

    await render(hbs`{{array-creator inputValue}}`);

    // @ts-ignore
    assert.equal(this.element.textContent.trim(), "A,C,G,T");
  });
});
