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
var controller_1 = require("@ember/controller");
var symbols_1 = require("../../../../system/symbols");
var regex_1 = require("../../../../system/regex");
var paths_1 = require("../../../../system/paths");
var CreationsGraphicsVectorGraphicsIndex = /** @class */ (function (_super) {
    __extends(CreationsGraphicsVectorGraphicsIndex, _super);
    function CreationsGraphicsVectorGraphicsIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreationsGraphicsVectorGraphicsIndex;
}(controller_1.default.extend({
    queryParams: ['page', 'restart'],
    page: 1,
    actions: {
        filterByTag: function (query, page) {
            if (query !== symbols_1.default.EMPTY) { // not empty input
                var processedParam = query.split(regex_1.default.COMMA_OR_SPACE); // comma and space
                var filteredParam = processedParam.filter(function (element) {
                    return element.length > 0;
                });
                return this.store
                    .query(paths_1.default.Models.VECTOR_GRAPHIC, { tags: filteredParam, page: page }) // filtering by tags, page and
                    .then(function (results) {
                    var meta = results.get('meta');
                    return { meta: meta, query: query, results: results };
                });
            }
            else {
                // the store contains all records loaded from a server
                // and after the results were retrieved, they are returned
                // together with the corresponding query
                return this.store
                    .query(paths_1.default.Models.VECTOR_GRAPHIC, { page: page })
                    .then(function (results) {
                    var meta = results.get('meta');
                    return { meta: meta, query: query, results: results };
                }); // show all
            }
        },
        setPage: function (page) {
            this.set('page', page);
        }
    }
})));
exports.default = CreationsGraphicsVectorGraphicsIndex;
//# sourceMappingURL=index.js.map