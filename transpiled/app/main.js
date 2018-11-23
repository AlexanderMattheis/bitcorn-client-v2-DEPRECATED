"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var needleman_wunsch_1 = require("./logic/algorithms/needleman-wunsch");
var defaults_1 = require("./system/defaults");
// start
var input = {
    sequenceA: defaults_1.default.Algorithms.NeedlemanWunsch.SEQUENCE_A,
    sequenceB: defaults_1.default.Algorithms.NeedlemanWunsch.SEQUENCE_B,
    gap: defaults_1.default.Algorithms.NeedlemanWunsch.GAP,
    match: defaults_1.default.Algorithms.NeedlemanWunsch.MATCH,
    mismatch: defaults_1.default.Algorithms.NeedlemanWunsch.MISMATCH
}; // stores the input of the algorithm
var needlemanWunsch = new needleman_wunsch_1.default(input);
needlemanWunsch.compute();
console.log("Test");
//# sourceMappingURL=main.js.map