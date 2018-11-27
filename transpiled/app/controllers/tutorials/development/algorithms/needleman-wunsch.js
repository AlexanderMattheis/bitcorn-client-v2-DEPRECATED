import Controller from '@ember/controller';
import ControlsFunctions from "../../../../view/controls-functions";
import CsvConverter from "../../../../system/formats/csv-converter";
import Defaults from "../../../../system/defaults";
import NeedlemanWunsch from "../../../../logic/algorithms/needleman-wunsch";
import Regex from "../../../../system/regex";
import Symbols from "../../../../system/symbols";
export default class TutorialsDevelopmentAlgorithmsNeedlemanWunsch extends Controller.extend({
    input: {},
    output: {},
    init() {
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
        download() {
            // create CSV-String
            let converter = new CsvConverter();
            let csvString = converter.matrixToCSV(Defaults.DYNAMIC_MATRIX_NAME, 
            // @ts-ignore
            this.input.sequenceA, this.input.sequenceB, this.output.matrix);
            // create download
            let file = new Blob([csvString], { type: "text/plain" });
            // @ts-ignore - using FileSaver.js library https://github.com/eligrey/FileSaver.js under the MIT licence
            window.saveAs(file, Defaults.Downloads.GENERATED_MATRIX);
        },
        recompute() {
            let input = this.getCorrectedInput();
            this.set("input", input);
            this.set("output", this.getExtendedOutput(input));
        }
    },
    getCorrectedInput() {
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
        return { sequenceA: sequenceA, sequenceB: sequenceB, gap: gap, match: match, mismatch: mismatch };
    },
    getExtendedOutput(input) {
        // compute
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        // add sequences to output data (necessary for the matrix)
        let outputData = ioData.output;
        outputData["sequenceA"] = input.sequenceA;
        outputData["sequenceB"] = input.sequenceB;
        return outputData;
    }
}) {
}
//# sourceMappingURL=needleman-wunsch.js.map