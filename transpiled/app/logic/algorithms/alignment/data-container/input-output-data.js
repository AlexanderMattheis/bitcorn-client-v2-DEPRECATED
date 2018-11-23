"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputOutputData = /** @class */ (function () {
    function InputOutputData(input, output) {
        this._input = input;
        this._output = output;
    }
    Object.defineProperty(InputOutputData.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputOutputData.prototype, "output", {
        get: function () {
            return this._output;
        },
        enumerable: true,
        configurable: true
    });
    return InputOutputData;
}());
exports.default = InputOutputData;
//# sourceMappingURL=input-output-data.js.map