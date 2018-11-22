export default class LinearAlignmentInputContainer {
    private readonly _sequenceA: string;
    private readonly _sequenceB: string;

    private readonly _gap: number;
    private readonly _match: number;
    private readonly _mismatch: number;

    private readonly _matrixHeight: number;
    private readonly _matrixWidth: number;

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
}