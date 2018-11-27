import Symbols from "../system/symbols";
import {scheduleOnce} from "@ember/runloop";

/**
 * Contains functions that are used by multiple views or components.
 * The problem is that these functions are no more easily to debug.
 * That is why this class do not contain all such globally used functions.
 */
export default class ControlsFunctions {
    public static hide(reference: any, htmlClass: string): void {
        scheduleOnce('afterRender', this, function() {
            reference.$(htmlClass).hide();
        });
    }

    public static toggleImageSize(reference: any, backgroundImageClass: string, resizingIconClass: string,
                             enlargedPixelSize: string, reducedPixelSize: string): void {
        let viewElements = reference.element;
        let backgroundImage: HTMLElement = viewElements.getElementsByClassName(backgroundImageClass)[0];
        let resizingIcon: HTMLElement = viewElements.getElementsByClassName(resizingIconClass)[0];

        if (backgroundImage.style.height === enlargedPixelSize) {
            backgroundImage.style.height = reducedPixelSize;
            backgroundImage.style.width = reducedPixelSize;
        } else {
            backgroundImage.style.height = enlargedPixelSize;
            backgroundImage.style.width = enlargedPixelSize;
            window.bitcorn.imageHasBeenEnlarge = true;  // can also be set below [@ref]
        }

        if (resizingIcon.classList.contains("sprite-reduce")) {
            resizingIcon.classList.add("sprite-enlarge");
            resizingIcon.classList.remove("sprite-reduce");
        } else {
            resizingIcon.classList.add("sprite-reduce");
            resizingIcon.classList.remove("sprite-enlarge");
            // [ref]
        }
    }

    public static toggleVisibility(reference: any, moveDown: string, dropper: string): void {
        if (reference.$(moveDown).is(':visible')) {
            reference.$(moveDown).slideUp("slow");

            let element: HTMLElement = reference.$(dropper)[0];
            element.innerHTML = Symbols.Arrows.RIGHT + element.innerHTML.substring(1);
        } else {
            reference.$(moveDown).slideDown("slow");

            let element: HTMLElement = reference.$(dropper)[0];
            element.innerHTML = Symbols.Arrows.DOWN + element.innerHTML.substring(1);
        }
    }

    public static limitNumber(number: number, min: number, max: number): number {
        number = number >= min? number : min;
        number = number <= max? number : max;
        return number;
    }
}