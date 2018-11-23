export default class LinearAlignmentOutputContainer {
    constructor() {
        this._matrix = [];
        this._score = NaN;
        this._tracebacks = [];
        this._alignments = [];
    }
    get matrix() {
        return this._matrix;
    }
    get score() {
        return this._score;
    }
    get tracebacks() {
        return this._tracebacks;
    }
    get alignments() {
        return this._alignments;
    }
    set matrix(value) {
        this._matrix = value;
    }
    set score(value) {
        this._score = value;
    }
    set tracebacks(value) {
        this._tracebacks = value;
    }
    set alignments(value) {
        this._alignments = value;
    }
}
//# sourceMappingURL=linear-alignment-output-container.js.map