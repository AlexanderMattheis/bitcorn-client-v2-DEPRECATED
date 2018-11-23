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
var defaults_1 = require("../system/defaults");
var FileListing = /** @class */ (function (_super) {
    __extends(FileListing, _super);
    function FileListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileListing;
}(component_1.default.extend({
    actions: {
        toggleSize: function (reference) {
            var viewElements = reference.element;
            var backgroundImage = viewElements.getElementsByClassName("image-background")[0];
            var resizingIcon = viewElements.getElementsByClassName("toggleImage")[0];
            if (backgroundImage.style.height === defaults_1.default.BackgroundImage.ENLARGED) {
                backgroundImage.style.height = defaults_1.default.BackgroundImage.REDUCED;
                backgroundImage.style.width = defaults_1.default.BackgroundImage.REDUCED;
            }
            else {
                backgroundImage.style.height = defaults_1.default.BackgroundImage.ENLARGED;
                backgroundImage.style.width = defaults_1.default.BackgroundImage.ENLARGED;
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
    }
})));
exports.default = FileListing;
;
//# sourceMappingURL=file-listing.js.map