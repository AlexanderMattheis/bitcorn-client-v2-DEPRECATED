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
var FilesLister = /** @class */ (function (_super_1) {
    __extends(FilesLister, _super_1);
    function FilesLister() {
        return _super_1 !== null && _super_1.apply(this, arguments) || this;
    }
    return FilesLister;
}(component_1.default.extend({
    inputValue: "",
    numberOfPages: 1,
    startPage: 1,
    init: function () {
        this._super.apply(this, arguments);
        // @ts-ignore
        if (this.restart) {
            this.send('handleFilterEntries', 1, true);
        }
        else {
            // @ts-ignore
            this.send('handleFilterEntries', this.page, false);
        }
    },
    actions: {
        handleFilterEntries: function (page, resetStartPage) {
            var _this = this;
            var inputValue = this.inputValue;
            // @ts-ignore
            var filterAction = this.filter;
            // filters given the typed in stuff from the input field
            // and sets then the filtered results as the returned results "results"
            filterAction(inputValue, page).then(function (resultsStruct) {
                if (resultsStruct.query === _this.inputValue) { // only if the results are for the current input
                    // @ts-ignore
                    _this.set("results", resultsStruct.results);
                    _this.set("numberOfPages", resultsStruct.meta.pages);
                    // whenever the input has changed, show numbers right from the beginning on and reset selected page
                    if (resetStartPage) {
                        _this.set("startPage", 1);
                        // @ts-ignore
                        _this.set("page", 1);
                    }
                }
            });
            if (resetStartPage) { // only if something is typed in, else it is automatically resetted
                if (window.bitcorn.imageHasBeenEnlarge) {
                    this.resetImageSize();
                    window.bitcorn.imageHasBeenEnlarge = false;
                }
            }
        },
        setCurrentPage: function (page, numberOfPages) {
            if (page >= 1 && page <= numberOfPages) {
                // @ts-ignore
                this.setPage(page);
                this.send('handleFilterEntries', page, false);
            }
        }
    },
    resetImageSize: function () {
        if (this.$(".subcontainer a") !== undefined && this.$(".subcontainer a").length > 0) {
            var elements = this.$(".subcontainer a");
            elements.each(function (index, element) {
                if (index % 2 === 0) {
                    element.style.height = "120px";
                    element.style.width = "120px";
                }
                else {
                    element.classList.add("sprite-enlarge");
                    element.classList.remove("sprite-reduce");
                }
            });
        }
        else { // usually not called, due to the global imageHasBeenEnlarged-variable
            // properly waiting in modern browsers until element is rendered (timeouts are not used anymore)
            window.requestAnimationFrame(this.resetImageSize.bind(this));
        }
    }
})));
exports.default = FilesLister;
;
//# sourceMappingURL=files-lister.js.map