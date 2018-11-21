export default class Vector {
    private _i:number;
    private _j:number;

    constructor(i, j) {
        this._i = i;
        this._j = j;
    }

    public get i(): number {
        return this._i;
    }

    public get j(): number {
        return this._j;
    }

    public set i(value: number) {
        this._i = value;
    }

    public set j(value: number) {
        this._j = value;
    }
}