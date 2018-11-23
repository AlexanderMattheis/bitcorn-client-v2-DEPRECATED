export default class AlignmentTraceback {
    getGlobalTraces(path, inputData, outputData, neighbourFunction) {
        let paths = [];
        this.globalTraceback(paths, path, inputData, outputData, neighbourFunction);
        return paths;
    }
    globalTraceback(paths, path, inputData, outputData, neighbourFunction) {
        let currentPosition = path[path.length - 1];
        let neighboured = neighbourFunction(currentPosition, inputData, outputData);
        // going through all successors (initial nodes of possible paths)
        for (let i = 0; i < neighboured.length; i++) {
            if (neighboured[i].i === 0 && neighboured[i].j === 0) { // stop criteria
                path.push(neighboured[i]);
                paths.push(path.slice()); // creating a shallow copy
                path.pop();
            }
            else {
                // executing procedure with a successor
                path.push(neighboured[i]);
                this.globalTraceback(paths, path, inputData, outputData, neighbourFunction);
                path.pop();
            }
        }
    }
}
//# sourceMappingURL=alignment-traceback.js.map