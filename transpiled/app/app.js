"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("@ember/application");
var resolver_1 = require("./resolver");
var ember_load_initializers_1 = require("ember-load-initializers");
var environment_1 = require("./config/environment");
var App = application_1.default.extend({
    modulePrefix: environment_1.default.modulePrefix,
    podModulePrefix: environment_1.default.podModulePrefix,
    Resolver: resolver_1.default
});
ember_load_initializers_1.default(App, environment_1.default.modulePrefix);
exports.default = App;
//# sourceMappingURL=app.js.map