import Component from '@ember/component';
import Colors from "../system/colors";
import Vector from "bitcorn-client/logic/math/vector";

export default class ResultsTable extends Component.extend({
    lastClickedSolution: -1,

    actions: {
        highlightTraceback(clickedSolution: number, tracebacks: Vector[][], rowLength: number): void {
            if (this.lastClickedSolution === clickedSolution) {  // reset if it was clicked two time on the same
              let matrixCells: JQuery = $(".matrix-cell");
              this.resetMatrixHighlight(matrixCells);
              let solutionLines: JQuery = this.$(".solution");
              resetResultHighlight(solutionLines);
            } else {
              this.highlightInSolutions(clickedSolution);
              this.highlightInMatrix(clickedSolution, tracebacks, rowLength);
              this.lastClickedSolution = clickedSolution;
            }
        }
    },

    highlightInSolutions(clickedSolution: number): void {
        let solutionLines: JQuery = this.$(".solution");

        for (let i: number = 0; i < solutionLines.length; i++) {
            let row: HTMLElement = solutionLines[i];
            let textLines: HTMLCollectionOf<Element> = row.getElementsByTagName("PRE");

            if (i === clickedSolution) {
                row.style.backgroundColor = Colors.YELLOW;

                for (let j = 0; j < textLines.length; j++) {
                    (textLines[j] as HTMLElement).style.color = Colors.WHITE;
                }
            } else {
                row.style.backgroundColor = Colors.WHITE;

                for (let j = 0; j < textLines.length; j++) {
                    (textLines[j] as HTMLElement).style.color = Colors.Dark.GRAY;
                }

            }
        }
    },

    resetResultHighlight(solutionLines: JQuery): void {

    },

    highlightInMatrix(clickedSolution: number, tracebacks: Vector[][], rowLength: number): void {
      let matrixCells: JQuery = $(".matrix-cell");
      let traceback: Vector[] = tracebacks[clickedSolution];

      this.resetMatrixHighlight(matrixCells);
      this.setMatrixHighlight(matrixCells, traceback, rowLength);
    },

    resetMatrixHighlight(matrixCells: JQuery): void {
      for (let i: number = 0; i < matrixCells.length; i++) {
        let matrixCell: HTMLElement = matrixCells[i];
        matrixCell.style.backgroundColor = Colors.WHITE;
        matrixCell.style.color = Colors.Dark.GRAY;
      }
    },

    setMatrixHighlight(matrixCells: JQuery, traceback: Vector[], rowLength: number): void {
      for (let i: number = 0; i < traceback.length; i++) {
        let position: Vector = traceback[i];
        let arrayPosition: number = position.i * rowLength + position.j;

        matrixCells[arrayPosition].style.backgroundColor = Colors.YELLOW;
        matrixCells[arrayPosition].style.color = Colors.WHITE;
      }
    }
}) {
  // normal class body definition here
};
