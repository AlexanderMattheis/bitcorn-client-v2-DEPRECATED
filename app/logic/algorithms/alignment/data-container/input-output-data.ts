export default class InputOutputData<T1, T2> {
    private readonly _input: T1;
    private readonly _output: T2;

    constructor(input: T1, output: T2) {
        this._input = input;
        this._output = output;
    }

    public get input(): T1 {
        return this._input;
    }

    public get output(): T2 {
        return this._output;
    }
}