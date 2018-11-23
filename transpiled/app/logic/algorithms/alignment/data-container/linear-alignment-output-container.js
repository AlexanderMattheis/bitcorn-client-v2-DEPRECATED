"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinearAlignmentOutputContainer = /** @class */ (function () {
    function LinearAlignmentOutputContainer() {
        this._matrix = [];
        this._score = NaN;
        this._tracebacks = [];
        this._alignments = [];
    }
    Object.defineProperty(LinearAlignmentOutputContainer.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        set: function (value) {
            this._matrix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentOutputContainer.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentOutputContainer.prototype, "tracebacks", {
        get: function () {
            return this._tracebacks;
        },
        set: function (value) {
            this._tracebacks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearAlignmentOutputContainer.prototype, "alignments", {
        get: function () {
            return this._alignments;
        },
        set: function (value) {
            this._alignments = value;
        },
        enumerable: true,
        configurable: true
    });
    return LinearAlignmentOutputContainer;
}());
exports.default = LinearAlignmentOutputContainer;
//# sourceMappingURL=linear-alignment-output-container.js.map