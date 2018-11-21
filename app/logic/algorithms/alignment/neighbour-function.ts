import Vector from "../../math/vector";

export default interface NeighbourFunction<T1, T2> {
    getNeighboured(position: Vector, inputData: T1, outputData: T2): Vector[];
}