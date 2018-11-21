import Symbols from "../../../system/symbols";
import InputOutputData from "./data-container/input-output-data";

export default abstract class Alignment<T1, T2> {

    public abstract compute(): InputOutputData<T1, T2>;
    protected abstract computeTracebacks(): void;
    protected abstract createAlignments(): void;

    protected createAlignment(path, sequenceA, sequenceB): string[] {
        path.reverse();  // allows more intuitive calculations from start (left-top) to finish (right-bottom)

        let alignedSequenceA: string = Symbols.EMPTY;
        let matchOrMismatchString: string = Symbols.EMPTY;
        let alignedSequenceB: string = Symbols.EMPTY;

        let currentPositionA: number = path[0].i;
        let currentPositionB: number = path[0].j;

        // going through each element of the path and look on the differences between vectors
        // to find out the type of difference vector (arrow)
        for (let i:number = 1; i < path.length; i++) {
            let verticalDifference: number = path[i].i - path[i - 1].i;
            let horizontalDifference: number = path[i].j - path[i - 1].j;

            if (verticalDifference === 1 && horizontalDifference === 1) {  // diagonal case
                let aChar: string = sequenceA[currentPositionA];
                let bChar: string = sequenceB[currentPositionB];

                alignedSequenceA += aChar;
                matchOrMismatchString += bChar === aChar ? Symbols.STAR : Symbols.VERTICAL_BAR;
                alignedSequenceB += bChar;

                currentPositionB++;
                currentPositionA++;
            } else if (horizontalDifference > 0) {  // horizontal case
                for (let k:number = 0; k < horizontalDifference; k++) {
                    alignedSequenceA += Symbols.GAP;
                    matchOrMismatchString += Symbols.SPACE;
                    alignedSequenceB += sequenceB[currentPositionB];

                    currentPositionB++;
                }
            } else if (verticalDifference > 0) {  // vertical case
                // Hint: for Gotoh really "else if" is required because you can switch between matrices
                for (let k:number = 0; k < verticalDifference; k++) {
                    alignedSequenceA += sequenceA[currentPositionA];
                    matchOrMismatchString += Symbols.SPACE;
                    alignedSequenceB += Symbols.GAP;

                    currentPositionA++;
                }
            }
        }

        return [alignedSequenceA, matchOrMismatchString, alignedSequenceB];
    }
}