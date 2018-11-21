import Alignment from "./alignment";
import AlignmentTraceback from "../traceback/alignment-traceback";
import InputOutputData from "../alignment/data-container/input-output-data";
import LinearAlignmentInputContainer from "./data-container/linear-alignment-input-container";
import LinearAlignmentOutputContainer from "./data-container/linear-alignment-output-container";
import NeighbourFunction from "./neighbour-function";
import Symbols from "../../../system/symbols";
import Vector from "../../math/vector";

export default abstract class LinearAlignment extends Alignment<LinearAlignmentInputContainer, LinearAlignmentOutputContainer>
    implements NeighbourFunction<LinearAlignmentInputContainer, LinearAlignmentOutputContainer> {

    protected readonly inputData: LinearAlignmentInputContainer;  // stores the input of the algorithm
    protected readonly outputData: LinearAlignmentOutputContainer;  // stores the output of the algorithm

    public constructor(input) {
        super();
        this.inputData = new LinearAlignmentInputContainer(input);
        this.outputData = new LinearAlignmentOutputContainer();
    }

    /**
     * @override
     */
    public compute(): InputOutputData<LinearAlignmentInputContainer, LinearAlignmentOutputContainer> {
        this.initializeMatrix();
        this.computeMatrixAndScore();
        this.computeTracebacks();
        this.createAlignments();
        return new InputOutputData(this.inputData, this.outputData);
    }

    protected initializeMatrix(): void {
        this.createMatrix();
    }

    private createMatrix(): void {
        this.outputData.matrix = [];

        for (let i: number = 0; i < this.inputData.matrixHeight; i++)
            this.outputData.matrix[i] = [];
    }

    protected abstract computeMatrixAndScore(): void;

    /**
     * @override
     */
    protected computeTracebacks(): void {
        let lowerRightCorner: Vector = new Vector(this.inputData.matrixHeight - 1, this.inputData.matrixWidth - 1);
        this.outputData.tracebacks = (new AlignmentTraceback<LinearAlignmentInputContainer, LinearAlignmentOutputContainer>())
            .getGlobalTraces([lowerRightCorner], this.inputData, this.outputData, this.getNeighboured);  // bracket first
    }

    /**
     * @override
     */
    public getNeighboured(position: Vector, inputData: LinearAlignmentInputContainer,
                          outputData: LinearAlignmentOutputContainer):Vector[] {
        let neighboured: Vector[] = [];

        let left: number = position.j - 1;
        let up: number = position.i - 1;

        // retrieve values
        let aChar: string = left >= 0 ? inputData.sequenceB[left] : Symbols.EMPTY;
        let bChar: string = up >= 0 ? inputData.sequenceA[up] : Symbols.EMPTY;

        let currentValue: number = outputData.matrix[position.i][position.j];

        let matchOrMismatch: number = aChar === bChar ? inputData.match : inputData.mismatch;

        let diagonalValue: number = left >= 0 && up >= 0 ? outputData.matrix[up][left] : NaN;
        let upValue: number = up >= 0 ? outputData.matrix[up][position.j] : NaN;
        let leftValue: number = left >= 0 ? outputData.matrix[position.i][left] : NaN;

        // check
        let isMatchMismatch: boolean = currentValue === diagonalValue + matchOrMismatch;
        let isDeletion: boolean = currentValue === upValue + inputData.gap;
        let isInsertion: boolean = currentValue === leftValue + inputData.gap;

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
    protected createAlignments(): void {
        this.outputData.alignments = [];
        let numTracebacks: number = this.outputData.tracebacks.length;

        for (let i:number = 0; i < numTracebacks; i++) {
            let alignment: string[] =
                this.createAlignment(this.outputData.tracebacks[i], this.inputData.sequenceA, this.inputData.sequenceB);
            this.outputData.alignments.push(alignment);
        }
    }
}