import Application from '@ember/application';

import { initialize } from 'bitcorn-client/initializers/listing-resizer';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Initializer | listing-resizer', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
      // @ts-ignore
      this.TestApplication = Application.extend();
      // @ts-ignore
      this.TestApplication.initializer({
          name: 'initializer under test',
          initialize
      });

      // @ts-ignore
      this.application = this.TestApplication.create({ autoboot: false });
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
