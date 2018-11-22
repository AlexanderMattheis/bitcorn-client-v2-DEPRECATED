import Component from '@ember/component';
import Defaults from '../system/defaults';

export default class FileListing extends Component.extend({
    actions: {
        toggleSize(reference: any): void {
            let viewElements = reference.element;
            let backgroundImage: HTMLElement = viewElements.getElementsByClassName("image-background")[0];
            let resizingIcon: HTMLElement = viewElements.getElementsByClassName("toggleImage")[0];

            if (backgroundImage.style.height === Defaults.BackgroundImage.ENLARGED) {
                backgroundImage.style.height = Defaults.BackgroundImage.REDUCED;
                backgroundImage.style.width = Defaults.BackgroundImage.REDUCED;
            } else {
                backgroundImage.style.height = Defaults.BackgroundImage.ENLARGED;
                backgroundImage.style.width = Defaults.BackgroundImage.ENLARGED;
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
    }
}) {
  // normal class body definition here
};
