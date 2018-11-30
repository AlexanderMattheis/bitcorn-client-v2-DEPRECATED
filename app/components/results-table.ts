import Component from '@ember/component';
import Colors from "../system/colors";
import Graphics from "../system/graphics";
import Vector from "../logic/math/vector";

export default class ResultsTable extends Component.extend({
  lastClickedSolution: -1,
  svg: {},

  actions: {
      highlightTraceback(clickedSolution: number, tracebacks: Vector[][], rowLength: number): void {
          if (this.lastClickedSolution === clickedSolution) {  // reset if it was clicked two time on the same
            let matrixCells: JQuery = $(".matrix-cell");
            this.resetMatrixHighlight(matrixCells);
            let solutionLines: JQuery = this.$(".solution");
            this.resetResultHighlight(solutionLines);

            this.lastClickedSolution = -1;  // after reseting no more equal
          } else {
            this.highlightInSolutions(clickedSolution);
            this.highlightInMatrix(clickedSolution, tracebacks, rowLength);

            this.lastClickedSolution = clickedSolution;
          }
      }
  },

  init(): void {
    this._super(...arguments);
    this.svg = this.createSVG(true);
  },

  createSVG(addMarkers: boolean): SVGElement {
    let svg: SVGElement
      = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "svg") as SVGElement;

    if (addMarkers) {
      svg.appendChild(this.createSVGEndMarker(Graphics.Arrows.COLOR, Graphics.MarkerIds.TRIANGLE));
    }

    return svg;
  },

  createSVGEndMarker(color: string, id: string): SVGMarkerElement {
    // create triangle
    let trianglePath: SVGPathElement =
      document.createElementNS(Graphics.SVG_NAMESPACE_URI, "path") as SVGPathElement;
    trianglePath.setAttribute("d", "M 0 0 L 0 8 L 8 4 z");  // triangle - M: move to, L: line to
    trianglePath.setAttribute("fill", color);

    // create marker object using path defined above
    let markerEnd: SVGMarkerElement =
      document.createElementNS(Graphics.SVG_NAMESPACE_URI, "marker") as SVGMarkerElement;
    markerEnd.setAttribute("id", id);
    markerEnd.setAttribute("orient", "auto");
    markerEnd.setAttribute("refX", "0");  // relative marker coordinate
    markerEnd.setAttribute("refY", "4");  // relative marker coordinate
    markerEnd.setAttribute("markerWidth", "4");
    markerEnd.setAttribute("markerHeight", "4");
    markerEnd.setAttribute("viewBox", "0 0 8 8");  // the page you see in Inkscape
    markerEnd.appendChild(trianglePath);

    return markerEnd;
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
    for (let i: number = 0; i < solutionLines.length; i++) {
      let row: HTMLElement = solutionLines[i];
      let textLines: HTMLCollectionOf<Element> = row.getElementsByTagName("PRE");

      row.style.backgroundColor = Colors.WHITE;
      for (let j = 0; j < textLines.length; j++) {
        (textLines[j] as HTMLElement).style.color = Colors.Dark.GRAY;
      }
    }
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
    let lastMatrixCell: HTMLTableElement;

    for (let i: number = traceback.length-1; i >= 0; i--) {  // bottom-up
      let arrayPosition: number = this.getArrayPosition(traceback[i], rowLength);
      let matrixCell: HTMLTableElement = matrixCells[arrayPosition];

      matrixCell.style.backgroundColor = Colors.YELLOW;
      matrixCell.style.color = Colors.WHITE;

      if (i < traceback.length-1) {
        // @ts-ignore
        debugger;
        this.drawArrow(lastMatrixCell, matrixCell);
      }

      lastMatrixCell = matrixCell;
    }
  },

  getArrayPosition(position2D: Vector, rowLength: number): number {
    return position2D.i * rowLength + position2D.j;
  },

  drawArrow(lastMatrixCell: HTMLTableElement, currentMatrixCell: HTMLTableElement):void {
    let overlay: HTMLElement = $("#overlay")[0];
    this.setOverlayPosition(overlay);
  },

  setOverlayPosition(overlay: HTMLElement): void {
    // retrieve
    let matrix: HTMLTableElement = $(".matrix")[0] as HTMLTableElement;

    // set
    this.svg.setAttribute("width", matrix.offsetWidth);
    this.svg.setAttribute("height", matrix.offsetHeight);
    overlay.style.left = matrix.offsetLeft.toString() + "px";
    overlay.style.top = matrix.offsetTop.toString() + "px";

    overlay.appendChild(this.svg);
  }
}) {
  // normal class body definition here
};
