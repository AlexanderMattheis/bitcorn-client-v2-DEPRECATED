import NeedlemanWunsch from "./logic/algorithms/needleman-wunsch";
import Defaults from "./system/defaults";

// start
let input = {
    sequenceA: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_A,
    sequenceB: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_B,

    gap: Defaults.Algorithms.NeedlemanWunsch.GAP,
    match: Defaults.Algorithms.NeedlemanWunsch.MATCH,
    mismatch: Defaults.Algorithms.NeedlemanWunsch.MISMATCH
};  // stores the input of the algorithm

let needlemanWunsch:NeedlemanWunsch = new NeedlemanWunsch(input);
needlemanWunsch.compute();
console.log("Test");

