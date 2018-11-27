import Symbols from "../system/symbols";
import { scheduleOnce } from "@ember/runloop";
/**
 * Contains functions that are used by multiple views or components.
 * The problem is that these functions are no more easily to debug.
 * That is why this class do not contain all such globally used functions.
 */
export default class ControlsFunctions {
    static hide(reference, htmlClass) {
        scheduleOnce('afterRender', this, function () {
            reference.$(htmlClass).hide();
        });
    }
    static toggleImageSize(reference, backgroundImageClass, resizingIconClass, enlargedPixelSize, reducedPixelSize) {
        let viewElements = reference.element;
        let backgroundImage = viewElements.getElementsByClassName(backgroundImageClass)[0];
        let resizingIcon = viewElements.getElementsByClassName(resizingIconClass)[0];
        if (backgroundImage.style.height === enlargedPixelSize) {
            backgroundImage.style.height = reducedPixelSize;
            backgroundImage.style.width = reducedPixelSize;
        }
        else {
            backgroundImage.style.height = enlargedPixelSize;
            backgroundImage.style.width = enlargedPixelSize;
            window.bitcorn.imageHasBeenEnlarge = true; // can also be set below [@ref]
        }
        if (resizingIcon.classList.contains("sprite-reduce")) {
            resizingIcon.classList.add("sprite-enlarge");
            resizingIcon.classList.remove("sprite-reduce");
        }
        else {
            resizingIcon.classList.add("sprite-reduce");
            resizingIcon.classList.remove("sprite-enlarge");
            // [ref]
        }
    }
    static toggleVisibility(reference, moveDown, dropper) {
        if (reference.$(moveDown).is(':visible')) {
            reference.$(moveDown).slideUp("slow");
            let element = reference.$(dropper)[0];
            element.innerHTML = Symbols.Arrows.RIGHT + element.innerHTML.substring(1);
        }
        else {
            reference.$(moveDown).slideDown("slow");
            let element = reference.$(dropper)[0];
            element.innerHTML = Symbols.Arrows.DOWN + element.innerHTML.substring(1);
        }
    }
    static limitNumber(number, min, max) {
        number = number >= min ? number : min;
        number = number <= max ? number : max;
        return number;
    }
}
//# sourceMappingURL=controls-functions.js.map