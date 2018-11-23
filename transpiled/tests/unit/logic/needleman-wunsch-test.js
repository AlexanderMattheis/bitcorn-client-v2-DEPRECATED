import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import NeedlemanWunsch from "bitcorn-client/logic/algorithms/needleman-wunsch";
module('Logic-Tests | Needleman-Wunsch', function (hooks) {
    setupTest(hooks);
    test('short sequences test 1', function (assert) {
        let input = {
            sequenceA: "AATCG",
            sequenceB: "AACG",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        let outputData = ioData.output;
        assert.equal(outputData.score, 2);
        assert.equal(outputData.alignments[0][0], "AATCG");
        assert.equal(outputData.alignments[0][2], "AA_CG");
    });
    test('short sequences test 2', function (assert) {
        let input = {
            sequenceA: "ATC",
            sequenceB: "AGTC",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        let outputData = ioData.output;
        assert.equal(outputData.score, 1);
        assert.equal(outputData.alignments[0][0], "A_TC");
        assert.equal(outputData.alignments[0][2], "AGTC");
    });
    test('long sequences test 1', function (assert) {
        let input = {
            sequenceA: "CCCCGCGACTCGGGTTCAAGGG",
            sequenceB: "GGGTGAGACCCCAGTTCAACCC",
            gap: -2,
            match: 4,
            mismatch: -1
        }; // stores the input of the algorithm
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        let outputData = ioData.output;
        assert.equal(outputData.score, 33);
        assert.equal(outputData.alignments[0][0], "CCCCGCGACTCGGGTTCAAGGG");
        assert.equal(outputData.alignments[0][2], "GGGTGAGACCCCAGTTCAACCC");
    });
    test('long sequences test 2', function (assert) {
        let input = {
            sequenceA: "TCCGA",
            sequenceB: "TACGCGC",
            gap: -1,
            match: 1,
            mismatch: 0
        }; // stores the input of the algorithm
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        let outputData = ioData.output;
        assert.equal(outputData.score, 2);
        assert.equal(outputData.alignments[0][0], "T_C_CGA");
        assert.equal(outputData.alignments[0][2], "TACGCGC");
    });
    test('multiple solution output', function (assert) {
        let input = {
            sequenceA: "AATCG",
            sequenceB: "ACG",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        let algorithm = new NeedlemanWunsch(input);
        let ioData = algorithm.compute();
        let outputData = ioData.output;
        assert.equal(outputData.score, -1);
        assert.equal(outputData.alignments[0][0], "AATCG");
        assert.equal(outputData.alignments[0][2], "_A_CG");
        assert.equal(outputData.alignments[1][0], "AATCG");
        assert.equal(outputData.alignments[1][2], "A__CG");
    });
});
//# sourceMappingURL=needleman-wunsch-test.js.map