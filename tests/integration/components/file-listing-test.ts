import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import EmberObject from '@ember/object';

module('Integration | Component | file-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
      // @ts-ignore
      this.listing = EmberObject.create({
          author: 'Alexander Mattheis',
          date: '2018-10-25',
          description: 'A small golden fish swimming around Antlantis.',
          image: '/assets/images/vector_graphics/golden_fish.png',
          licence: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed" target="_blank">CC0 1.0 Universal</a>',
          path: '/assets/downloads/vector_graphics/golden_fish.svg',
          tags: ['atlantis', 'fish', 'golden', 'tropical'],
          title: 'Golden Fish'
      });
  });

  test('it renders', async function(assert) {
      await render(hbs`{{file-listing linking=false model=listing}}`);

      // @ts-ignore
      assert.equal(this.element.querySelector(".listing .name h3").textContent.trim(),
          "Golden Fish by Alexander Mattheis");
  });

  test("resizing by clicking", async function(assert) {
      await render(hbs`{{file-listing linking=false model=listing}}`);
      let backgroundImage = this.element.querySelector(".image-background");

      // @ts-ignore
      let height = backgroundImage.offsetHeight;
      // @ts-ignore
      let width = backgroundImage.offsetWidth;

      assert.equal(height, 120);
      assert.equal(width, 120);

      // [CLICK]
      await click(".image-background");

      // @ts-ignore
      height = backgroundImage.offsetHeight;
      // @ts-ignore
      width = backgroundImage.offsetWidth;

      assert.equal(height, 430);
      assert.equal(width, 430);
    });

});
