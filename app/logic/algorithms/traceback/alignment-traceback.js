"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlignmentTraceback = /** @class */ (function () {
    function AlignmentTraceback() {
    }
    AlignmentTraceback.prototype.getGlobalTraces = function (path, inputData, outputData, neighbourFunction) {
        var paths = [];
        this.globalTraceback(paths, path, inputData, outputData, neighbourFunction);
        return paths;
    };
    AlignmentTraceback.prototype.globalTraceback = function (paths, path, inputData, outputData, neighbourFunction) {
        var currentPosition = path[path.length - 1];
        var neighboured = neighbourFunction(currentPosition, inputData, outputData);
        // going through all successors (initial nodes of possible paths)
        for (var i = 0; i < neighboured.length; i++) {
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
    };
    return AlignmentTraceback;
}());
exports.default = AlignmentTraceback;
//# sourceMappingURL=alignment-traceback.js.map