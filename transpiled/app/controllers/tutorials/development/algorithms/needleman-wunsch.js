import Controller from '@ember/controller';
import Defaults from "../../../../system/defaults";
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
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
    }
}) {
}
//# sourceMappingURL=needleman-wunsch.js.map