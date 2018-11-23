"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linear_alignment_1 = require("./alignment/linear-alignment");
/**
 * Computes the optimal, global alignment between two strings.
 * @see https://doi.org/10.1016/0022-2836(70)90057-4
 *
 * Needleman, Saul B., and Christian D. Wunsch.
 * "A general method applicable to the search for similarities in the amino acid sequence of two proteins."
 * Journal of molecular biology 48.3 (1970): 443-453.
 */
var NeedlemanWunsch = /** @class */ (function (_super) {
    __extends(NeedlemanWunsch, _super);
    function NeedlemanWunsch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @override
     */
    NeedlemanWunsch.prototype.initializeMatrix = function () {
        _super.prototype.initializeMatrix.call(this);
        // initialize left upper corner
        this.outputData.matrix[0][0] = 0;
        // initialize left matrix border
        for (var i = 1; i < this.inputData.matrixHeight; i++)
            this.outputData.matrix[i][0] = this.outputData.matrix[i - 1][0] + this.inputData.gap;
        // initialize upper matrix border
        for (var j = 1; j < this.inputData.matrixWidth; j++)
            this.outputData.matrix[0][j] = this.outputData.matrix[0][j - 1] + this.inputData.gap;
    };
    /**
     * @override
     */
    NeedlemanWunsch.prototype.computeMatrixAndScore = function () {
        // going through every matrix cell
        for (var i = 1; i < this.inputData.matrixHeight; i++) {
            var aChar = this.inputData.sequenceA[i - 1];
            for (var j = 1; j < this.inputData.matrixWidth; j++) {
                var bChar = this.inputData.sequenceB[j - 1];
                this.outputData.matrix[i][j] = this.recursionFunction(aChar, bChar, i, j);
            }
        }
        // score is stored in the right bottom cell
        this.outputData.score = this.outputData.matrix[this.inputData.matrixHeight - 1][this.inputData.matrixWidth - 1];
    };
    NeedlemanWunsch.prototype.recursionFunction = function (aChar, bChar, i, j) {
        var matchOrMismatch = aChar === bChar ? this.inputData.match : this.inputData.mismatch;
        var diagonalValue = this.outputData.matrix[i - 1][j - 1] + matchOrMismatch;
        var upValue = this.outputData.matrix[i - 1][j] + this.inputData.gap;
        var leftValue = this.outputData.matrix[i][j - 1] + this.inputData.gap;
        return Math.max(diagonalValue, upValue, leftValue);
    };
    return NeedlemanWunsch;
}(linear_alignment_1.default));
exports.default = NeedlemanWunsch;
//# sourceMappingURL=needleman-wunsch.js.map