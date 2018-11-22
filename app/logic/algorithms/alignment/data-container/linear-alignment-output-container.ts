import Vector from "../../../math/vector";

export default class LinearAlignmentOutputContainer {
    private _matrix: number[][];
    private _score: number;
    private _tracebacks: Vector[][];
    private _alignments: string[][];

    constructor() {
        this._matrix = [];
        this._score = NaN;
        this._tracebacks = [];
        this._alignments = [];
    }

    public get matrix(): number[][] {
        return this._matrix;
    }

    public get score(): number {
        return this._score;
    }

    public get tracebacks(): Vector[][] {
        return this._tracebacks;
    }

    public get alignments(): string[][] {
        return this._alignments;
    }

    public set matrix(value: number[][]) {
        this._matrix = value;
    }

    public set score(value: number) {
        this._score = value;
    }

    public set tracebacks(value: Vector[][]) {
        this._tracebacks = value;
    }

    public set alignments(value: string[][]) {
        this._alignments = value;
    }
}