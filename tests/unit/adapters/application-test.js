"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = require("qunit");
var ember_qunit_1 = require("ember-qunit");
qunit_1.module('Unit | Adapter | application', function (hooks) {
    ember_qunit_1.setupTest(hooks);
    // Replace this with your real tests.
    qunit_1.test('it exists', function (assert) {
        var adapter = this.owner.lookup('adapter:application');
        assert.ok(adapter);
    });
});
//# sourceMappingURL=application-test.js.map