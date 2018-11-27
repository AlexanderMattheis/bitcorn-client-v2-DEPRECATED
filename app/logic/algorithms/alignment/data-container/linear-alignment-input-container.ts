export default class LinearAlignmentInputContainer {
    private _sequenceA: string;
    private _sequenceB: string;

    private _gap: number;
    private _match: number;
    private _mismatch: number;

    private _matrixHeight: number;
    private _matrixWidth: number;

    constructor(input: any) {
        this._sequenceA = input.sequenceA;
        this._sequenceB = input.sequenceB;

        this._gap = input.gap;
        this._match = input.match;
        this._mismatch = input.mismatch;

        this._matrixHeight = input.sequenceA.length + 1;
        this._matrixWidth = input.sequenceB.length + 1;
    }

    public get sequenceA(): string {
        return this._sequenceA;
    }

    public get sequenceB(): string {
        return this._sequenceB;
    }

    public get gap(): number {
        return this._gap;
    }

    public get match(): number {
        return this._match;
    }

    public get mismatch(): number {
        return this._mismatch;
    }

    public get matrixHeight(): number {
        return this._matrixHeight;
    }

    public get matrixWidth(): number {
        return this._matrixWidth;
    }

    public set sequenceA(value: string) {
        this._sequenceA = value;
        this._matrixHeight = this._sequenceA.length + 1;
    }

    public set sequenceB(value: string) {
        this._sequenceB = value;
        this._matrixWidth = this._sequenceB.length + 1;
    }

    public set gap(value: number) {
        this._gap = value;
    }

    public set match(value: number) {
        this._match = value;
    }

    public set mismatch(value: number) {
        this._mismatch = value;
    }
}