"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = require("qunit");
var ember_qunit_1 = require("ember-qunit");
var runloop_1 = require("@ember/runloop");
qunit_1.module('Unit | Model | creations/graphics/vector graphic', function (hooks) {
    ember_qunit_1.setupTest(hooks);
    // Replace this with your real tests.
    qunit_1.test('it exists', function (assert) {
        var store = this.owner.lookup('service:store');
        var model = runloop_1.run(function () { return store.createRecord('creations/graphics/vector-graphic', {}); });
        assert.ok(model);
    });
});
//# sourceMappingURL=vector-graphic-test.js.map