"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("@ember/component/helper");
function repeat(_a) {
    var start = _a[0], end = _a[1];
    var numbers = [];
    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}
exports.repeat = repeat;
exports.default = helper_1.helper(repeat);
//# sourceMappingURL=repeat.js.map