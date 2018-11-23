import Symbols from "../../../system/symbols";
export default class Alignment {
    createAlignment(path, sequenceA, sequenceB) {
        path.reverse(); // allows more intuitive calculations from start (left-top) to finish (right-bottom)
        let alignedSequenceA = Symbols.EMPTY;
        let matchOrMismatchString = Symbols.EMPTY;
        let alignedSequenceB = Symbols.EMPTY;
        let currentPositionA = path[0].i;
        let currentPositionB = path[0].j;
        // going through each element of the path and look on the differences between vectors
        // to find out the type of difference vector (arrow)
        for (let i = 1; i < path.length; i++) {
            let verticalDifference = path[i].i - path[i - 1].i;
            let horizontalDifference = path[i].j - path[i - 1].j;
            if (verticalDifference === 1 && horizontalDifference === 1) { // diagonal case
                let aChar = sequenceA[currentPositionA];
                let bChar = sequenceB[currentPositionB];
                alignedSequenceA += aChar;
                matchOrMismatchString += bChar === aChar ? Symbols.STAR : Symbols.VERTICAL_BAR;
                alignedSequenceB += bChar;
                currentPositionB++;
                currentPositionA++;
            }
            else if (horizontalDifference > 0) { // horizontal case
                for (let k = 0; k < horizontalDifference; k++) {
                    alignedSequenceA += Symbols.GAP;
                    matchOrMismatchString += Symbols.SPACE;
                    alignedSequenceB += sequenceB[currentPositionB];
                    currentPositionB++;
                }
            }
            else if (verticalDifference > 0) { // vertical case
                // Hint: for Gotoh really "else if" is required because you can switch between matrices
                for (let k = 0; k < verticalDifference; k++) {
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
//# sourceMappingURL=alignment.js.map