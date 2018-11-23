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
var alignment_1 = require("./alignment");
var alignment_traceback_1 = require("../traceback/alignment-traceback");
var input_output_data_1 = require("../alignment/data-container/input-output-data");
var linear_alignment_input_container_1 = require("./data-container/linear-alignment-input-container");
var linear_alignment_output_container_1 = require("./data-container/linear-alignment-output-container");
var symbols_1 = require("../../../system/symbols");
var vector_1 = require("../../math/vector");
var LinearAlignment = /** @class */ (function (_super) {
    __extends(LinearAlignment, _super);
    function LinearAlignment(input) {
        var _this = _super.call(this) || this;
        _this.inputData = new linear_alignment_input_container_1.default(input);
        _this.outputData = new linear_alignment_output_container_1.default();
        return _this;
    }
    /**
     * @override
     */
    LinearAlignment.prototype.compute = function () {
        this.initializeMatrix();
        this.computeMatrixAndScore();
        this.computeTracebacks();
        this.createAlignments();
        return new input_output_data_1.default(this.inputData, this.outputData);
    };
    LinearAlignment.prototype.initializeMatrix = function () {
        this.createMatrix();
    };
    LinearAlignment.prototype.createMatrix = function () {
        this.outputData.matrix = [];
        for (var i = 0; i < this.inputData.matrixHeight; i++)
            this.outputData.matrix[i] = [];
    };
    /**
     * @override
     */
    LinearAlignment.prototype.computeTracebacks = function () {
        var lowerRightCorner = new vector_1.default(this.inputData.matrixHeight - 1, this.inputData.matrixWidth - 1);
        this.outputData.tracebacks = (new alignment_traceback_1.default())
            .getGlobalTraces([lowerRightCorner], this.inputData, this.outputData, this.getNeighboured); // bracket first
    };
    /**
     * @override
     */
    LinearAlignment.prototype.getNeighboured = function (position, inputData, outputData) {
        var neighboured = [];
        var left = position.j - 1;
        var up = position.i - 1;
        // retrieve values
        var aChar = left >= 0 ? inputData.sequenceB[left] : symbols_1.default.EMPTY;
        var bChar = up >= 0 ? inputData.sequenceA[up] : symbols_1.default.EMPTY;
        var currentValue = outputData.matrix[position.i][position.j];
        var matchOrMismatch = aChar === bChar ? inputData.match : inputData.mismatch;
        var diagonalValue = left >= 0 && up >= 0 ? outputData.matrix[up][left] : NaN;
        var upValue = up >= 0 ? outputData.matrix[up][position.j] : NaN;
        var leftValue = left >= 0 ? outputData.matrix[position.i][left] : NaN;
        // check
        var isMatchMismatch = currentValue === diagonalValue + matchOrMismatch;
        var isDeletion = currentValue === upValue + inputData.gap;
        var isInsertion = currentValue === leftValue + inputData.gap;
        // add
        if (isMatchMismatch)
            neighboured.push(new vector_1.default(up, left));
        if (isDeletion)
            neighboured.push(new vector_1.default(up, position.j));
        if (isInsertion)
            neighboured.push(new vector_1.default(position.i, left));
        return neighboured;
    };
    /**
     * @override
     */
    LinearAlignment.prototype.createAlignments = function () {
        this.outputData.alignments = [];
        var numTracebacks = this.outputData.tracebacks.length;
        for (var i = 0; i < numTracebacks; i++) {
            var alignment = this.createAlignment(this.outputData.tracebacks[i], this.inputData.sequenceA, this.inputData.sequenceB);
            this.outputData.alignments.push(alignment);
        }
    };
    return LinearAlignment;
}(alignment_1.default));
exports.default = LinearAlignment;
//# sourceMappingURL=linear-alignment.js.map