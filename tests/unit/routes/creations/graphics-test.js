"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = require("qunit");
var ember_qunit_1 = require("ember-qunit");
qunit_1.module('Unit | Route | creations/graphics', function (hooks) {
    ember_qunit_1.setupTest(hooks);
    qunit_1.test('it exists', function (assert) {
        var route = this.owner.lookup('route:creations/graphics');
        assert.ok(route);
    });
});
//# sourceMappingURL=graphics-test.js.map