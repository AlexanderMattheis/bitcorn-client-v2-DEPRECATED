"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinearAlignmentInputContainer = /** @class */ (function () {
    function LinearAlignmentInputContainer(input) {
        this._sequenceA = input.sequenceA;
        this._sequenceB = input.sequenceB;
        this._gap = input.gap;
        this._match = input.match;
        this._mismatch = input.mismatch;
        this._matrixHeight = input.sequenceA.length + 1;
        this._matrixWidth = input.sequenceB.length + 1;
    }
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "sequenceA", {
        get: function () {
            return this._sequenceA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "sequenceB", {
        get: function () {
            return this._sequenceB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "gap", {
        get: function () {
            return this._gap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "mismatch", {
        get: function () {
            return this._mismatch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "matrixHeight", {
        get: function () {
            return this._matrixHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentInputContainer.prototype, "matrixWidth", {
        get: function () {
            return this._matrixWidth;
        },
        enumerable: true,
        configurable: true
    });
    return LinearAlignmentInputContainer;
}());
exports.default = LinearAlignmentInputContainer;
//# sourceMappingURL=linear-alignment-input-container.js.map