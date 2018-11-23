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
var PageSwitcher = /** @class */ (function (_super) {
    __extends(PageSwitcher, _super);
    function PageSwitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PageSwitcher;
}(component_1.default.extend({
    scrollUp: function () {
        document.body.scrollTop = 180;
        if (document.documentElement !== null) {
            document.documentElement.scrollTop = 180;
        }
    },
    actions: {
        move: function (number, numberOfPages) {
            // @ts-ignore
            this.setCurrentPage(number, numberOfPages);
            var newStart = number - 5;
            // if shown pages < left bound
            if (newStart < 1) {
                newStart = 1; // minimum start
            }
            // if shown pages > right bound
            if (newStart + 9 > numberOfPages && numberOfPages - 9 >= 1) {
                // @ts-ignore
                this.set("startPage", numberOfPages - 9); // maximum start
            }
            else { // else the current page should be centered within pagination, that's why start = newStart-5
                // @ts-ignore
                this.set("startPage", newStart);
            }
            if (number > 0 && number <= numberOfPages) {
                this.scrollUp();
            }
        }
    }
})));
exports.default = PageSwitcher;
;
//# sourceMappingURL=page-switcher.js.map