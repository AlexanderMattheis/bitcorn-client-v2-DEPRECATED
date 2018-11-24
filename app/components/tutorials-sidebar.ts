import Component from '@ember/component';
import ControlsFunctions from "../view/controls-functions";

export default class TutorialsSidebar extends Component.extend({
    actions: {
        toggleVisibility: function(moveDown: string, dropper: string): void {
            ControlsFunctions.toggleVisibility(this, moveDown, dropper);
        }
    },

    didInsertElement: function(): void {
        ControlsFunctions.hide(this, ".dropdown");
    }
}) {
  // normal class body definition here
};
