import Component from '@ember/component';
import Colors from "../system/colors";
import Graphics from "../system/graphics";
export default class ResultsTable extends Component.extend({
    lastClickedSolution: -1,
    svg: {},
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
    init() {
        this._super(...arguments);
        this.svg = this.createSVG(true);
    },
    createSVG(addMarkers) {
        let svg = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "svg");
        if (addMarkers) {
            svg.appendChild(this.createSVGEndMarker(Graphics.Arrows.COLOR, Graphics.MarkerIds.TRIANGLE));
        }
        return svg;
    },
    createSVGEndMarker(color, id) {
        // create triangle
        let trianglePath = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "path");
        trianglePath.setAttribute("d", "M 0 0 L 0 8 L 8 4 z"); // triangle - M: move to, L: line to
        trianglePath.setAttribute("fill", color);
        // create marker object using path defined above
        let markerEnd = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "marker");
        markerEnd.setAttribute("id", id);
        markerEnd.setAttribute("orient", "auto");
        markerEnd.setAttribute("refX", "0"); // relative marker coordinate
        markerEnd.setAttribute("refY", "4"); // relative marker coordinate
        markerEnd.setAttribute("markerWidth", "4");
        markerEnd.setAttribute("markerHeight", "4");
        markerEnd.setAttribute("viewBox", "0 0 8 8"); // the page you see in Inkscape
        markerEnd.appendChild(trianglePath);
        return markerEnd;
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
        // remove arrows
        while (this.svg.hasChildNodes() && this.svg.lastChild.class === "line") {
            this.svg.removeChild(this.svg.lastChild);
        }
    },
    setMatrixHighlight(matrixCells, traceback, rowLength) {
        let lastMatrixCell;
        for (let i = traceback.length - 1; i >= 0; i--) { // bottom-up
            let arrayPosition = this.getArrayPosition(traceback[i], rowLength);
            let matrixCell = matrixCells[arrayPosition];
            matrixCell.style.backgroundColor = Colors.YELLOW;
            matrixCell.style.color = Colors.WHITE;
            if (i < traceback.length - 1) {
                debugger;
                // @ts-ignore
                this.drawArrow(lastMatrixCell, matrixCell);
            }
            lastMatrixCell = matrixCell;
        }
    },
    getArrayPosition(position2D, rowLength) {
        return position2D.i * rowLength + position2D.j;
    },
    drawArrow(lastMatrixCell, currentMatrixCell) {
        // retrieve
        let overlay = $("#overlay")[0];
        let matrix = $(".matrix")[0];
        let matrixBounds = matrix.getBoundingClientRect();
        // set
        this.setOverlayPosition(matrixBounds, overlay);
        // create
        let arrow = this.createSVGArrow(matrixBounds, lastMatrixCell, currentMatrixCell);
        // @ts-ignore
        this.svg.appendChild(arrow);
        overlay.appendChild(this.svg);
    },
    setOverlayPosition(matrixBounds, overlay) {
        // set
        // @ts-ignore
        this.svg.setAttribute("width", matrixBounds.width.toString());
        // @ts-ignore
        this.svg.setAttribute("height", matrixBounds.height.toString());
        overlay.style.left = matrixBounds.left.toString() + "px";
        overlay.style.top = (matrixBounds.top + window.scrollY).toString() + "px";
    },
    createSVGArrow(matrixBounds, lastMatrixCell, currentMatrixCell) {
        // retrieve
        let arrow = document.createElementNS(Graphics.SVG_NAMESPACE_URI, "line");
        let lastCellBounds = lastMatrixCell.getBoundingClientRect();
        let currentCellBounds = currentMatrixCell.getBoundingClientRect();
        // using previously defined TRIANGLE
        arrow.setAttribute("marker-end", "url(#" + Graphics.MarkerIds.TRIANGLE + ")");
        // define line
        arrow.setAttribute("stroke", Graphics.Arrows.COLOR);
        arrow.setAttribute("x1", (lastCellBounds.left - matrixBounds.left).toString());
        arrow.setAttribute("y1", (lastCellBounds.top - matrixBounds.top).toString());
        arrow.setAttribute("x2", (currentCellBounds.left - matrixBounds.left).toString());
        arrow.setAttribute("y2", (currentCellBounds.top - matrixBounds.top).toString());
        // @ts-ignore
        return arrow;
    }
}) {
}
;
//# sourceMappingURL=results-table.js.map