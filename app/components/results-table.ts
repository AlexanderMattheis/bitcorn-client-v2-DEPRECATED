import Component from '@ember/component';
import Colors from "../system/colors";
import Graphics from "../system/graphics";
import Vector from "../logic/math/vector";

export default class ResultsTable extends Component.extend({
  lastClickedSolution: -1,
  svg: {},
  solutionNumber: -1,
  _clickedSolution: -1,
  _tracebacks: null,
  _rowLength: -1,

  actions: {
      highlightTraceback(clickedSolution: number, tracebacks: Vector[][], rowLength: number): void {
          if (window.bitcorn.solutionNumber !== this.solutionNumber) {  // if the solutions have been recomputed
            this.lastClickedSolution = -1;
          }

          if (this.lastClickedSolution === clickedSolution) {  // reset if it was clicked two time on the same
            let matrixCells: JQuery = $(".matrix-cell");
            this.resetMatrixHighlight(matrixCells);
            let solutionLines: JQuery = this.$(".solution");
            this.resetResultHighlight(solutionLines);

            this.lastClickedSolution = -1;  // after reseting no more equal
          } else {
            this.solutionNumber = window.bitcorn.solutionNumber;
            this.highlightInSolutions(clickedSolution);
            this.highlightInMatrix(clickedSolution, tracebacks, rowLength);

            this.lastClickedSolution = clickedSolution;
          }
      }
  },

  init(): void {
    this._super(...arguments);
    this.enableRedrawing();
    this.svg = this.createSVG(true);
  },

  enableRedrawing(): void {
    $(window).on("resize", {}, this.redraw.bind(this));
  },

  redraw(): void {
    // tracebacks had be drawn once and the solution has not been recomputed at the moment
    if (this._tracebacks !== null && window.bitcorn.solutionNumber === this.solutionNumber) {
      // @ts-ignore
      this.highlightInMatrix(this._clickedSolution, this._tracebacks, this._rowLength);
    }
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
    this.setArgumentsForRedrawing(clickedSolution, tracebacks, rowLength);

    let matrixCells: JQuery = $(".matrix-cell");
    let traceback: Vector[] = tracebacks[clickedSolution];

    this.resetMatrixHighlight(matrixCells);
    this.setMatrixHighlight(matrixCells, traceback, rowLength);
  },

  setArgumentsForRedrawing(clickedSolution: number, tracebacks: Vector[][], rowLength: number):void {
    this._clickedSolution = clickedSolution;
    // @ts-ignore
    this._tracebacks = tracebacks;
    this._rowLength = rowLength;
  },

  resetMatrixHighlight(matrixCells: JQuery): void {
    for (let i: number = 0; i < matrixCells.length; i++) {
      let matrixCell: HTMLElement = matrixCells[i];
      matrixCell.style.backgroundColor = Colors.WHITE;
      matrixCell.style.color = Colors.Dark.GRAY;
    }

    // @ts-ignore - remove arrows
    while (this.svg.hasChildNodes() && this.svg.lastChild.nodeName === "line") {
      // @ts-ignore
      this.svg.removeChild(this.svg.lastChild);
    }
  },

  setMatrixHighlight(matrixCells: JQuery, traceback: Vector[], rowLength: number): void {
    let lastMatrixCell: HTMLTableElement;

    for (let i: number = traceback.length-1; i >= 0; i--) {  // bottom-up
      let arrayPosition: number = this.getArrayPosition(traceback[i], rowLength);
      let matrixCell: HTMLTableElement = matrixCells[arrayPosition] as HTMLTableElement;

      matrixCell.style.backgroundColor = Colors.YELLOW;
      matrixCell.style.color = Colors.WHITE;

      if (i < traceback.length-1) {
        // @ts-ignore
        this.drawArrow(lastMatrixCell, matrixCell);
      }

      lastMatrixCell = matrixCell;
    }
  },

  getArrayPosition(position2D: Vector, rowLength: number): number {
    return position2D.i * rowLength + position2D.j;
  },

  drawArrow(lastMatrixCell: HTMLTableElement, currentMatrixCell: HTMLTableElement):void {
    // retrieve
    let overlay: HTMLElement = $("#overlay")[0];
    let matrix: HTMLTableElement = $(".matrix")[0] as HTMLTableElement;
    let matrixBounds = matrix.getBoundingClientRect();

    // set
    this.setOverlayPosition(matrixBounds, overlay);

    // create
    let arrow: SVGElement = this.createSVGArrow(matrixBounds, lastMatrixCell, currentMatrixCell);

    // @ts-ignore
    this.svg.appendChild(arrow);
    overlay.appendChild(this.svg as Node);
  },

  setOverlayPosition(matrixBounds: any, overlay: HTMLElement): void {
    // set
    // @ts-ignore
    this.svg.setAttribute("width", matrixBounds.width.toString());
    // @ts-ignore
    this.svg.setAttribute("height", matrixBounds.height.toString());

    overlay.style.left = (matrixBounds.left + window.scrollX).toString() + "px";
    overlay.style.top = (matrixBounds.top + window.scrollY).toString() + "px";
  },

  createSVGArrow(matrixBounds: any,
                 lastMatrixCell: HTMLTableElement, currentMatrixCell: HTMLTableElement): SVGElement {
    // retrieve
    let arrow: SVGElement = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "line") as SVGElement;

    // using previously defined TRIANGLE
    arrow.setAttribute("marker-end", "url(#" + Graphics.MarkerIds.TRIANGLE + ")");

    // define line
    let positions: any = this.getLinePositions(lastMatrixCell, currentMatrixCell);

    arrow.setAttribute("stroke", Graphics.Arrows.COLOR);
    arrow.setAttribute("x1", (positions.x1 - matrixBounds.left).toString());
    arrow.setAttribute("y1", (positions.y1 - matrixBounds.top).toString());
    arrow.setAttribute("x2", (positions.x2 - matrixBounds.left).toString());
    arrow.setAttribute("y2", (positions.y2 - matrixBounds.top).toString());

    // @ts-ignore
    return arrow;
  },

  getLinePositions(lastMatrixCell: HTMLTableElement, currentMatrixCell: HTMLTableElement): object {
    let lastCellBounds = lastMatrixCell.getBoundingClientRect();
    let currentCellBounds = currentMatrixCell.getBoundingClientRect();

    let lastCellX: number = -1;
    let lastCellY: number = -1;
    let cellX: number = -1;
    let cellY: number = -1;

    let horizontalDifference: number = lastCellBounds.left - currentCellBounds.left;
    let verticalDifference: number =  lastCellBounds.top - currentCellBounds.top;

    if (horizontalDifference > 0 && verticalDifference > 0) {
      lastCellX = lastCellBounds.left + lastCellBounds.width * Graphics.Arrows.PERCENT_INSIDE_LAST_CELL;
      lastCellY = lastCellBounds.top + lastCellBounds.height * Graphics.Arrows.PERCENT_INSIDE_LAST_CELL;
      cellX = currentCellBounds.left + currentCellBounds.width * (1-Graphics.Arrows.PERCENT_INSIDE_CELL);
      cellY = currentCellBounds.top + currentCellBounds.height * (1-Graphics.Arrows.PERCENT_INSIDE_CELL);
    } else if (horizontalDifference > 0) {
      lastCellX = lastCellBounds.left + lastCellBounds.width * Graphics.Arrows.PERCENT_INSIDE_LAST_CELL;
      lastCellY = lastCellBounds.top + lastCellBounds.height/2;
      cellX = currentCellBounds.left + currentCellBounds.width * (1-Graphics.Arrows.PERCENT_INSIDE_CELL);
      cellY = currentCellBounds.top + currentCellBounds.height/2;
    } else {
      lastCellX = lastCellBounds.left + lastCellBounds.width/2;
      lastCellY = lastCellBounds.top + lastCellBounds.height * Graphics.Arrows.PERCENT_INSIDE_LAST_CELL;
      cellX = currentCellBounds.left + currentCellBounds.width/2;
      cellY = currentCellBounds.top + currentCellBounds.height * (1-Graphics.Arrows.PERCENT_INSIDE_CELL);
    }

    return { x1: lastCellX, y1: lastCellY, x2: cellX, y2: cellY };
  }
}) {
  // normal class body definition here
};
