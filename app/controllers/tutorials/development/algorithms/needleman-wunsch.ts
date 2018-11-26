import Controller from '@ember/controller';
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
import InputOutputData from "../../../../logic/algorithms/alignment/data-container/input-output-data";
import InputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-input-container";
import OutputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-output-container";

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
        recompute(): void {
            let sequenceA: string = $("#sequence-a")[0].value.toUpperCase();
            let sequenceB: string = $("#sequence-b")[0].value.toUpperCase();
            let gap: number = parseInt($("#gap")[0].value);
            let match: number = parseInt($("#match")[0].value);
            let mismatch: number = parseInt($("#mismatch")[0].value);

            let input = {
                sequenceA: sequenceA,
                sequenceB: sequenceB,

                gap: gap,
                match: match,
                mismatch: mismatch
            };

            let algorithm: NeedlemanWunsch = new NeedlemanWunsch(input);
            let ioData: InputOutputData<InputContainer, OutputContainer> = algorithm.compute();
            let outputData: OutputContainer = ioData.output;
            this.set("output", outputData);
        }
    }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'tutorials/development/algorithms/needleman-wunsch': TutorialsDevelopmentAlgorithmsNeedlemanWunsch;
  }
}
