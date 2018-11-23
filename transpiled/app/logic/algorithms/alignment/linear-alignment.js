import Alignment from "./alignment";
import AlignmentTraceback from "../traceback/alignment-traceback";
import InputOutputData from "../alignment/data-container/input-output-data";
import LinearAlignmentInputContainer from "./data-container/linear-alignment-input-container";
import LinearAlignmentOutputContainer from "./data-container/linear-alignment-output-container";
import Symbols from "../../../system/symbols";
import Vector from "../../math/vector";
export default class LinearAlignment extends Alignment {
    constructor(input) {
        super();
        this.inputData = new LinearAlignmentInputContainer(input);
        this.outputData = new LinearAlignmentOutputContainer();
    }
    /**
     * @override
     */
    compute() {
        this.initializeMatrix();
        this.computeMatrixAndScore();
        this.computeTracebacks();
        this.createAlignments();
        return new InputOutputData(this.inputData, this.outputData);
    }
    initializeMatrix() {
        this.createMatrix();
    }
    createMatrix() {
        this.outputData.matrix = [];
        for (let i = 0; i < this.inputData.matrixHeight; i++)
            this.outputData.matrix[i] = [];
    }
    /**
     * @override
     */
    computeTracebacks() {
        let lowerRightCorner = new Vector(this.inputData.matrixHeight - 1, this.inputData.matrixWidth - 1);
        this.outputData.tracebacks = (new AlignmentTraceback())
            .getGlobalTraces([lowerRightCorner], this.inputData, this.outputData, this.getNeighboured); // bracket first
    }
    /**
     * @override
     */
    getNeighboured(position, inputData, outputData) {
        let neighboured = [];
        let left = position.j - 1;
        let up = position.i - 1;
        // retrieve values
        let aChar = left >= 0 ? inputData.sequenceB[left] : Symbols.EMPTY;
        let bChar = up >= 0 ? inputData.sequenceA[up] : Symbols.EMPTY;
        let currentValue = outputData.matrix[position.i][position.j];
        let matchOrMismatch = aChar === bChar ? inputData.match : inputData.mismatch;
        let diagonalValue = left >= 0 && up >= 0 ? outputData.matrix[up][left] : NaN;
        let upValue = up >= 0 ? outputData.matrix[up][position.j] : NaN;
        let leftValue = left >= 0 ? outputData.matrix[position.i][left] : NaN;
        // check
        let isMatchMismatch = currentValue === diagonalValue + matchOrMismatch;
        let isDeletion = currentValue === upValue + inputData.gap;
        let isInsertion = currentValue === leftValue + inputData.gap;
        // add
        if (isMatchMismatch)
            neighboured.push(new Vector(up, left));
        if (isDeletion)
            neighboured.push(new Vector(up, position.j));
        if (isInsertion)
            neighboured.push(new Vector(position.i, left));
        return neighboured;
    }
    /**
     * @override
     */
    createAlignments() {
        this.outputData.alignments = [];
        let numTracebacks = this.outputData.tracebacks.length;
        for (let i = 0; i < numTracebacks; i++) {
            let alignment = this.createAlignment(this.outputData.tracebacks[i], this.inputData.sequenceA, this.inputData.sequenceB);
            this.outputData.alignments.push(alignment);
        }
    }
}
//# sourceMappingURL=linear-alignment.js.map