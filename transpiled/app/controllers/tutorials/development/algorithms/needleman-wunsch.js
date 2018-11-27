import Controller from '@ember/controller';
import ControlsFunctions from "../../../../view/controls-functions";
import Defaults from "../../../../system/defaults";
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
import Regex from "../../../../system/regex";
import Symbols from "../../../../system/symbols";
export default class TutorialsDevelopmentAlgorithmsNeedlemanWunsch extends Controller.extend({
    input: {},
    output: {},
    init() {
        let input = {
            sequenceA: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_A,
            sequenceB: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_B,
            gap: Defaults.Algorithms.NeedlemanWunsch.GAP,
            match: Defaults.Algorithms.NeedlemanWunsch.MATCH,
            mismatch: Defaults.Algorithms.NeedlemanWunsch.MISMATCH
        };
        this.input = input;
    },
    actions: {
        recompute: function () {
            let sequenceA = $("#sequence-a")[0].value.toUpperCase();
            let sequenceB = $("#sequence-b")[0].value.toUpperCase();
            let gap = parseInt($("#gap")[0].value);
            let match = parseInt($("#match")[0].value);
            let mismatch = parseInt($("#mismatch")[0].value);
            let input = {
                sequenceA: sequenceA,
                sequenceB: sequenceB,
                gap: gap,
                match: match,
                mismatch: mismatch
            };
            let algorithm = new NeedlemanWunsch(input);
            let ioData = algorithm.compute();
            let inputData = ioData.input;
            let outputData = ioData.output;
            this.set("input", inputData);
            this.set("output", outputData);
        }
    },
    getInput() {
        // read in
        let sequenceA = $("#sequence-a")[0].value.toUpperCase();
        let sequenceB = $("#sequence-b")[0].value.toUpperCase();
        let gap = parseInt($("#gap")[0].value);
        let match = parseInt($("#match")[0].value);
        let mismatch = parseInt($("#mismatch")[0].value);
        // clean/limit
        sequenceA = sequenceA.replace(Regex.NON_CHARACTERS, Symbols.EMPTY);
        sequenceB = sequenceB.replace(Regex.NON_CHARACTERS, Symbols.EMPTY);
        gap = ControlsFunctions.limitNumber(gap, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);
        match = ControlsFunctions.limitNumber(match, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);
        mismatch = ControlsFunctions.limitNumber(mismatch, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);
    }
}) {
}
//# sourceMappingURL=needleman-wunsch.js.map