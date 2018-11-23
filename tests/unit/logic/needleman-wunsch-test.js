"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = require("qunit");
var ember_qunit_1 = require("ember-qunit");
var needleman_wunsch_1 = require("bitcorn-client/logic/algorithms/needleman-wunsch");
qunit_1.module('Logic-Tests | Needleman-Wunsch', function (hooks) {
    ember_qunit_1.setupTest(hooks);
    qunit_1.test('short sequences test 1', function (assert) {
        var input = {
            sequenceA: "AATCG",
            sequenceB: "AACG",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        var algorithm = new needleman_wunsch_1.default(input);
        var ioData = algorithm.compute();
        var outputData = ioData.output;
        assert.equal(outputData.score, 2);
        assert.equal(outputData.alignments[0][0], "AATCG");
        assert.equal(outputData.alignments[0][2], "AA_CG");
    });
    qunit_1.test('short sequences test 2', function (assert) {
        var input = {
            sequenceA: "ATC",
            sequenceB: "AGTC",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        var algorithm = new needleman_wunsch_1.default(input);
        var ioData = algorithm.compute();
        var outputData = ioData.output;
        assert.equal(outputData.score, 1);
        assert.equal(outputData.alignments[0][0], "A_TC");
        assert.equal(outputData.alignments[0][2], "AGTC");
    });
    qunit_1.test('long sequences test 1', function (assert) {
        var input = {
            sequenceA: "CCCCGCGACTCGGGTTCAAGGG",
            sequenceB: "GGGTGAGACCCCAGTTCAACCC",
            gap: -2,
            match: 4,
            mismatch: -1
        }; // stores the input of the algorithm
        var algorithm = new needleman_wunsch_1.default(input);
        var ioData = algorithm.compute();
        var outputData = ioData.output;
        assert.equal(outputData.score, 33);
        assert.equal(outputData.alignments[0][0], "CCCCGCGACTCGGGTTCAAGGG");
        assert.equal(outputData.alignments[0][2], "GGGTGAGACCCCAGTTCAACCC");
    });
    qunit_1.test('long sequences test 2', function (assert) {
        var input = {
            sequenceA: "TCCGA",
            sequenceB: "TACGCGC",
            gap: -1,
            match: 1,
            mismatch: 0
        }; // stores the input of the algorithm
        var algorithm = new needleman_wunsch_1.default(input);
        var ioData = algorithm.compute();
        var outputData = ioData.output;
        assert.equal(outputData.score, 2);
        assert.equal(outputData.alignments[0][0], "T_C_CGA");
        assert.equal(outputData.alignments[0][2], "TACGCGC");
    });
    qunit_1.test('multiple solution output', function (assert) {
        var input = {
            sequenceA: "AATCG",
            sequenceB: "ACG",
            gap: -2,
            match: 1,
            mismatch: -1
        }; // stores the input of the algorithm
        var algorithm = new needleman_wunsch_1.default(input);
        var ioData = algorithm.compute();
        var outputData = ioData.output;
        assert.equal(outputData.score, -1);
        assert.equal(outputData.alignments[0][0], "AATCG");
        assert.equal(outputData.alignments[0][2], "_A_CG");
        assert.equal(outputData.alignments[1][0], "AATCG");
        assert.equal(outputData.alignments[1][2], "A__CG");
    });
});
//# sourceMappingURL=needleman-wunsch-test.js.map