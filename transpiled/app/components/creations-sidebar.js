"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("@ember/component");
var runloop_1 = require("@ember/runloop");
var symbols_1 = require("../system/symbols");
var CreationsSidebar = /** @class */ (function (_super) {
    __extends(CreationsSidebar, _super);
    function CreationsSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreationsSidebar;
}(component_1.default.extend({
    actions: {
        click: function (moveDown, dropper) {
            if (this.$(moveDown).is(':visible')) {
                this.$(moveDown).slideUp("slow");
                var element = this.$(dropper)[0];
                element.innerHTML = symbols_1.default.Arrows.RIGHT + element.innerHTML.substring(1);
            }
            else {
                this.$(moveDown).slideDown("slow");
                var element = this.$(dropper)[0];
                element.innerHTML = symbols_1.default.Arrows.DOWN + element.innerHTML.substring(1);
            }
        }
    },
    didInsertElement: function () {
        runloop_1.scheduleOnce('afterRender', this, function () {
            this.$(".dropdown").hide();
        });
    }
})));
exports.default = CreationsSidebar;
;
//# sourceMappingURL=creations-sidebar.js.map