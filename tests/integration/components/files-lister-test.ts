import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

const ITEMS = [{tags: "atlantis,fish,golden,tropical"},
    {tags: "coin, golden, money, thaler"},
    {tags: "palm, tropical, pirate"}];

module('Integration | Component | files-lister', function(hooks) {
  setupRenderingTest(hooks);

  test('loads listings', async function(assert) {
    this.set("filter", () => resolve({ meta: { pages: 1 }, query: "", results: ITEMS }));
    this.set("empty", function () {});
    debugger;
    // Template block usage:
    await render(hbs`
      {{#files-lister
          page=1
          restart=true
          setPage=(action empty)
          filter=(action filter) as |data|}}
        <ul>
          {{#each data as |listing|}}
            <li class="listing">{{listing.tags}}</li>
          {{/each}}
        </ul>
      {{/files-lister}}
    `);

    return settled().then(() => {
        assert.equal(this.element.querySelectorAll(".listing").length, 3);
        // @ts-ignore
        assert.equal(this.element.querySelector(".listing").textContent.trim(), "atlantis,fish,golden,tropical");
    });
  });
});
