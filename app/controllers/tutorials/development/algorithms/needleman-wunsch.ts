import Controller from '@ember/controller';
import ControlsFunctions from "../../../../view/controls-functions";
import CsvConverter from "../../../../system/formats/csv-converter";
import Defaults from "../../../../system/defaults";
import InputOutputData from "../../../../logic/algorithms/alignment/data-container/input-output-data";
import InputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-input-container";
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
import OutputContainer from "../../../../logic/algorithms/alignment/data-container/linear-alignment-output-container";
import Regex from "../../../../system/regex";
import Symbols from "../../../../system/symbols";

export default class TutorialsDevelopmentAlgorithmsNeedlemanWunsch extends Controller.extend({
    input: {},
    output: {},

    init(): void {
        // set input
        let input = {
            sequenceA: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_A,
            sequenceB: Defaults.Algorithms.NeedlemanWunsch.SEQUENCE_B,

            gap: Defaults.Algorithms.NeedlemanWunsch.GAP,
            match: Defaults.Algorithms.NeedlemanWunsch.MATCH,
            mismatch: Defaults.Algorithms.NeedlemanWunsch.MISMATCH
        };

        this.input = input;
        this.output = this.getExtendedOutput(input);
    },

    actions: {
        download(): void {
            // create CSV-String
            let converter: CsvConverter = new CsvConverter();
            let csvString: string = converter.matrixToCSV(Defaults.DYNAMIC_MATRIX_NAME,
                // @ts-ignore
                this.input.sequenceA, this.input.sequenceB, this.output.matrix);

            // create download
            let file = new Blob([csvString], {type: "text/plain"});
            // @ts-ignore - using FileSaver.js library https://github.com/eligrey/FileSaver.js under the MIT licence
            window.saveAs(file, Defaults.Downloads.GENERATED_MATRIX);
        },

        recompute(): void {
          let input = this.getCorrectedInput();

          this.set("input", input);
          this.set("output", this.getExtendedOutput(input));

          // clear overlay drawing
          ControlsFunctions.cleanOverlay();
          window.bitcorn.solutionNumber++;
        }
    },

    getCorrectedInput(): any {
        // read in
        let sequenceA: string = ($("#sequence-a")[0] as HTMLInputElement).value.toUpperCase();
        let sequenceB: string = ($("#sequence-b")[0] as HTMLInputElement).value.toUpperCase();
        let gap: number = parseInt(($("#gap")[0] as HTMLInputElement).value);
        let match: number = parseInt(($("#match")[0] as HTMLInputElement).value);
        let mismatch: number = parseInt(($("#mismatch")[0] as HTMLInputElement).value);

        // clean/limit
        sequenceA = sequenceA.replace(Regex.NON_CHARACTERS, Symbols.EMPTY);
        sequenceB = sequenceB.replace(Regex.NON_CHARACTERS, Symbols.EMPTY);
        gap = ControlsFunctions.limitNumber(gap, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);
        match = ControlsFunctions.limitNumber(match, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);
        mismatch = ControlsFunctions.limitNumber(mismatch, Defaults.Limits.MIN_VALUE, Defaults.Limits.MAX_VALUE);

        return { sequenceA: sequenceA, sequenceB: sequenceB, gap: gap, match: match, mismatch: mismatch };
    },

    getExtendedOutput(input: any): any {
        // compute
        let algorithm: NeedlemanWunsch = new NeedlemanWunsch(input);
        let ioData: InputOutputData<InputContainer, OutputContainer> = algorithm.compute();

        // add sequences to output data (necessary for the matrix)
        let outputData: any = ioData.output;
        outputData["sequenceA"] = input.sequenceA;
        outputData["sequenceB"] = input.sequenceB;

        return outputData;
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
