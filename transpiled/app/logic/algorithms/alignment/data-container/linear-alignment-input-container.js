export default class LinearAlignmentInputContainer {
    constructor(input) {
        this._sequenceA = input.sequenceA;
        this._sequenceB = input.sequenceB;
        this._gap = input.gap;
        this._match = input.match;
        this._mismatch = input.mismatch;
        this._matrixHeight = input.sequenceA.length + 1;
        this._matrixWidth = input.sequenceB.length + 1;
    }
    get sequenceA() {
        return this._sequenceA;
    }
    get sequenceB() {
        return this._sequenceB;
    }
    get gap() {
        return this._gap;
    }
    get match() {
        return this._match;
    }
    get mismatch() {
        return this._mismatch;
    }
    get matrixHeight() {
        return this._matrixHeight;
    }
    get matrixWidth() {
        return this._matrixWidth;
    }
    set sequenceA(value) {
        this._sequenceA = value;
        this._matrixHeight = this._sequenceA.length + 1;
    }
    set sequenceB(value) {
        this._sequenceB = value;
        this._matrixWidth = this._sequenceB.length + 1;
    }
    set gap(value) {
        this._gap = value;
    }
    set match(value) {
        this._match = value;
    }
    set mismatch(value) {
        this._mismatch = value;
    }
}
//# sourceMappingURL=linear-alignment-input-container.js.map