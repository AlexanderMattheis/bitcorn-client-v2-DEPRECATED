"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ember_data_1 = require("ember-data");
var strings_1 = require("../system/strings");
var Array = ember_data_1.default.Transform.extend({
    deserialize: function (serialized) {
        return serialized.join(strings_1.default.COMMA_SEPARATOR);
    },
    serialize: function (deserialized) {
        return deserialized.split(strings_1.default.COMMA_SEPARATOR);
    }
});
exports.default = Array;
//# sourceMappingURL=array.js.map