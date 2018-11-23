"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbols_1 = require("../../../system/symbols");
var Alignment = /** @class */ (function () {
    function Alignment() {
    }
    Alignment.prototype.createAlignment = function (path, sequenceA, sequenceB) {
        path.reverse(); // allows more intuitive calculations from start (left-top) to finish (right-bottom)
        var alignedSequenceA = symbols_1.default.EMPTY;
        var matchOrMismatchString = symbols_1.default.EMPTY;
        var alignedSequenceB = symbols_1.default.EMPTY;
        var currentPositionA = path[0].i;
        var currentPositionB = path[0].j;
        // going through each element of the path and look on the differences between vectors
        // to find out the type of difference vector (arrow)
        for (var i = 1; i < path.length; i++) {
            var verticalDifference = path[i].i - path[i - 1].i;
            var horizontalDifference = path[i].j - path[i - 1].j;
            if (verticalDifference === 1 && horizontalDifference === 1) { // diagonal case
                var aChar = sequenceA[currentPositionA];
                var bChar = sequenceB[currentPositionB];
                alignedSequenceA += aChar;
                matchOrMismatchString += bChar === aChar ? symbols_1.default.STAR : symbols_1.default.VERTICAL_BAR;
                alignedSequenceB += bChar;
                currentPositionB++;
                currentPositionA++;
            }
            else if (horizontalDifference > 0) { // horizontal case
                for (var k = 0; k < horizontalDifference; k++) {
                    alignedSequenceA += symbols_1.default.GAP;
                    matchOrMismatchString += symbols_1.default.SPACE;
                    alignedSequenceB += sequenceB[currentPositionB];
                    currentPositionB++;
                }
            }
            else if (verticalDifference > 0) { // vertical case
                // Hint: for Gotoh really "else if" is required because you can switch between matrices
                for (var k = 0; k < verticalDifference; k++) {
                    alignedSequenceA += sequenceA[currentPositionA];
                    matchOrMismatchString += symbols_1.default.SPACE;
                    alignedSequenceB += symbols_1.default.GAP;
                    currentPositionA++;
                }
            }
        }
        return [alignedSequenceA, matchOrMismatchString, alignedSequenceB];
    };
    return Alignment;
}());
exports.default = Alignment;
//# sourceMappingURL=alignment.js.map