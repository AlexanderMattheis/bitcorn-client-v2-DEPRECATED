import Component from '@ember/component';
import Colors from "../system/colors";
export default class ResultsTable extends Component.extend({
    lastClickedSolution: -1,
    actions: {
        highlightTraceback(clickedSolution, tracebacks, rowLength) {
            if (this.lastClickedSolution === clickedSolution) { // reset if it was clicked two time on the same
                let matrixCells = $(".matrix-cell");
                this.resetMatrixHighlight(matrixCells);
                let solutionLines = this.$(".solution");
                this.resetResultHighlight(solutionLines);
                this.lastClickedSolution = -1; // after reseting no more equal
            }
            else {
                this.highlightInSolutions(clickedSolution);
                this.highlightInMatrix(clickedSolution, tracebacks, rowLength);
                this.lastClickedSolution = clickedSolution;
            }
        }
    },
    highlightInSolutions(clickedSolution) {
        let solutionLines = this.$(".solution");
        for (let i = 0; i < solutionLines.length; i++) {
            let row = solutionLines[i];
            let textLines = row.getElementsByTagName("PRE");
            if (i === clickedSolution) {
                row.style.backgroundColor = Colors.YELLOW;
                for (let j = 0; j < textLines.length; j++) {
                    textLines[j].style.color = Colors.WHITE;
                }
            }
            else {
                row.style.backgroundColor = Colors.WHITE;
                for (let j = 0; j < textLines.length; j++) {
                    textLines[j].style.color = Colors.Dark.GRAY;
                }
            }
        }
    },
    resetResultHighlight(solutionLines) {
        for (let i = 0; i < solutionLines.length; i++) {
            let row = solutionLines[i];
            let textLines = row.getElementsByTagName("PRE");
            row.style.backgroundColor = Colors.WHITE;
            for (let j = 0; j < textLines.length; j++) {
                textLines[j].style.color = Colors.Dark.GRAY;
            }
        }
    },
    highlightInMatrix(clickedSolution, tracebacks, rowLength) {
        let matrixCells = $(".matrix-cell");
        let traceback = tracebacks[clickedSolution];
        this.resetMatrixHighlight(matrixCells);
        this.setMatrixHighlight(matrixCells, traceback, rowLength);
    },
    resetMatrixHighlight(matrixCells) {
        for (let i = 0; i < matrixCells.length; i++) {
            let matrixCell = matrixCells[i];
            matrixCell.style.backgroundColor = Colors.WHITE;
            matrixCell.style.color = Colors.Dark.GRAY;
        }
    },
    setMatrixHighlight(matrixCells, traceback, rowLength) {
        for (let i = 0; i < traceback.length; i++) {
            let position = traceback[i];
            let arrayPosition = position.i * rowLength + position.j;
            matrixCells[arrayPosition].style.backgroundColor = Colors.YELLOW;
            matrixCells[arrayPosition].style.color = Colors.WHITE;
        }
    }
}) {
}
;
//# sourceMappingURL=results-table.js.map