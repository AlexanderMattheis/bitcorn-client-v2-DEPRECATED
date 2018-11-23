"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("@ember/component/helper");
var ember_1 = require("ember");
var symbols_1 = require("../system/symbols");
function htmlSafe(params) {
    return ember_1.default.String.htmlSafe(params.join(symbols_1.default.EMPTY));
}
exports.htmlSafe = htmlSafe;
exports.default = helper_1.helper(htmlSafe);
//# sourceMappingURL=html-safe.js.map