import Controller from '@ember/controller';
import Defaults from "../../../../system/defaults";
import InputOutputData from "../../../../logic/algorithms/alignment/data-container/input-output-data";
import InputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-input-container";
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
import OutputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-output-container";


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
            let sequenceA: string = ($("#sequence-a")[0] as HTMLInputElement).value.toUpperCase();
            let sequenceB: string = ($("#sequence-b")[0] as HTMLInputElement).value.toUpperCase();
            let gap: number = parseInt(($("#gap")[0] as HTMLInputElement).value);
            let match: number = parseInt(($("#match")[0] as HTMLInputElement).value);
            let mismatch: number = parseInt(($("#mismatch")[0] as HTMLInputElement).value);

            let input = {
                sequenceA: sequenceA,
                sequenceB: sequenceB,

                gap: gap,
                match: match,
                mismatch: mismatch
            };

            let algorithm: NeedlemanWunsch = new NeedlemanWunsch(input);
            let ioData: InputOutputData<InputContainer, OutputContainer> = algorithm.compute();
            let inputData: InputContainer = ioData.input;
            let outputData: OutputContainer = ioData.output;

            this.set("input", inputData);
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
