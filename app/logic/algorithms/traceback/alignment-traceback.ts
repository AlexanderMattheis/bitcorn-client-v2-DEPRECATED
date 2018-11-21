import Vector from "../../math/vector";

export default class AlignmentTraceback<T1, T2> {
    getGlobalTraces(path:Vector[], inputData: T1, outputData: T2,
                    neighbourFunction: (position:Vector, inputData: T1, outputData: T2) => Vector[]):Vector[][] {

        let paths:Vector[][] = [];
        this.globalTraceback(paths, path, inputData, outputData, neighbourFunction);
        return paths;
    }

    globalTraceback(paths: Vector[][], path: Vector[], inputData: T1, outputData: T2,
                    neighbourFunction: (position:Vector, inputData: T1, outputData: T2) => Vector[]): void {

        let currentPosition:Vector = path[path.length - 1];
        let neighboured:Vector[] = neighbourFunction(currentPosition, inputData, outputData);

        // going through all successors (initial nodes of possible paths)
        for (let i:number = 0; i < neighboured.length; i++) {
            if (neighboured[i].i === 0 && neighboured[i].j === 0) {  // stop criteria
                path.push(neighboured[i]);
                paths.push(path.slice());  // creating a shallow copy
                path.pop();
            } else {
                // executing procedure with a successor
                path.push(neighboured[i]);
                this.globalTraceback(paths, path, inputData, outputData, neighbourFunction);
                path.pop();
            }
        }
    }
}