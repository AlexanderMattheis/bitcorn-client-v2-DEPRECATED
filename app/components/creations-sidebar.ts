import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import Symbols from '../system/symbols';

export default class CreationsSidebar extends Component.extend({
    actions: {
        click: function(moveDown: string, dropper: string): void {
            if (this.$(moveDown).is(':visible')) {
                this.$(moveDown).slideUp("slow");

                let element: HTMLElement = this.$(dropper)[0];
                element.innerHTML = Symbols.Arrows.RIGHT + element.innerHTML.substring(1);
            } else {
                this.$(moveDown).slideDown("slow");

                let element: HTMLElement = this.$(dropper)[0];
                element.innerHTML = Symbols.Arrows.DOWN + element.innerHTML.substring(1);
            }
        }
    },

    didInsertElement: function(): void {
        scheduleOnce('afterRender', this, function() {
            this.$(".dropdown").hide();
        });
    }
}) {
  // normal class body definition here
};
