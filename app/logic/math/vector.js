"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector = /** @class */ (function () {
    function Vector(i, j) {
        this._i = i;
        this._j = j;
    }
    Object.defineProperty(Vector.prototype, "i", {
        get: function () {
            return this._i;
        },
        set: function (value) {
            this._i = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "j", {
        get: function () {
            return this._j;
        },
        set: function (value) {
            this._j = value;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
exports.default = Vector;
//# sourceMappingURL=vector.js.map