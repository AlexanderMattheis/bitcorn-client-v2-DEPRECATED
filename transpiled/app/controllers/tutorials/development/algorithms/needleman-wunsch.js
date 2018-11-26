import Controller from '@ember/controller';
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
export default class TutorialsDevelopmentAlgorithmsNeedlemanWunsch extends Controller.extend({
    input: {},
    output: {},
    init() {
        let input = {
            sequenceA: "AACGT",
            sequenceB: "ACGT",
            gap: -2,
            match: 1,
            mismatch: -1
        };
        this.input = input;
    },
    actions: {
        recompute() {
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
            let outputData = ioData.output;
            this.set("output", outputData);
        }
    }
}) {
}
//# sourceMappingURL=needleman-wunsch.js.map