"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
var environment_1 = require("../config/environment");
var test_helpers_1 = require("@ember/test-helpers");
var ember_qunit_1 = require("ember-qunit");
test_helpers_1.setApplication(app_1.default.create(environment_1.default.APP));
ember_qunit_1.start();
//# sourceMappingURL=test-helper.js.map