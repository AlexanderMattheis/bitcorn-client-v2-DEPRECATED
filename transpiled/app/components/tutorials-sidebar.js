import Component from '@ember/component';
import ControlsFunctions from "../view/controls-functions";
export default class TutorialsSidebar extends Component.extend({
    actions: {
        toggleVisibility: function (moveDown, dropper) {
            ControlsFunctions.toggleVisibility(this, moveDown, dropper);
        }
    },
    didInsertElement: function () {
        ControlsFunctions.hide(this, ".dropdown");
    }
}) {
}
;
//# sourceMappingURL=tutorials-sidebar.js.map