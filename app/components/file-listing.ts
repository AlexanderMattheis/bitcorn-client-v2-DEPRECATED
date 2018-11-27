import Component from '@ember/component';
import ControlsFunctions from "../view/controls-functions";
import Defaults from "../system/defaults";

export default class FileListing extends Component.extend({
    actions: {
        toggleSize(reference: any): void {
            ControlsFunctions.toggleImageSize(reference, "image-background", "toggle-image",
                Defaults.BackgroundImage.ENLARGED, Defaults.BackgroundImage.REDUCED);
        }
    }
}) {
  // normal class body definition here
};
