import LinearAlignment from "./alignment/linear-alignment";
/**
 * Computes the optimal, global alignment between two strings.
 * @see https://doi.org/10.1016/0022-2836(70)90057-4
 *
 * Needleman, Saul B., and Christian D. Wunsch.
 * "A general method applicable to the search for similarities in the amino acid sequence of two proteins."
 * Journal of molecular biology 48.3 (1970): 443-453.
 */
export default class NeedlemanWunsch extends LinearAlignment {
    /**
     * @override
     */
    initializeMatrix() {
        super.initializeMatrix();
        // initialize left upper corner
        this.outputData.matrix[0][0] = 0;
        // initialize left matrix border
        for (let i = 1; i < this.inputData.matrixHeight; i++)
            this.outputData.matrix[i][0] = this.outputData.matrix[i - 1][0] + this.inputData.gap;
        // initialize upper matrix border
        for (let j = 1; j < this.inputData.matrixWidth; j++)
            this.outputData.matrix[0][j] = this.outputData.matrix[0][j - 1] + this.inputData.gap;
    }
    /**
     * @override
     */
    computeMatrixAndScore() {
        // going through every matrix cell
        for (let i = 1; i < this.inputData.matrixHeight; i++) {
            let aChar = this.inputData.sequenceA[i - 1];
            for (let j = 1; j < this.inputData.matrixWidth; j++) {
                let bChar = this.inputData.sequenceB[j - 1];
                this.outputData.matrix[i][j] = this.recursionFunction(aChar, bChar, i, j);
            }
        }
        // score is stored in the right bottom cell
        this.outputData.score = this.outputData.matrix[this.inputData.matrixHeight - 1][this.inputData.matrixWidth - 1];
    }
    recursionFunction(aChar, bChar, i, j) {
        let matchOrMismatch = aChar === bChar ? this.inputData.match : this.inputData.mismatch;
        let diagonalValue = this.outputData.matrix[i - 1][j - 1] + matchOrMismatch;
        let upValue = this.outputData.matrix[i - 1][j] + this.inputData.gap;
        let leftValue = this.outputData.matrix[i][j - 1] + this.inputData.gap;
        return Math.max(diagonalValue, upValue, leftValue);
    }
}
//# sourceMappingURL=needleman-wunsch.js.map