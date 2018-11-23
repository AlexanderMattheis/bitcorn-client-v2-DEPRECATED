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
var route_1 = require("@ember/routing/route");
var paths_1 = require("../../../../system/paths");
var CreationsGraphicsTexturesIndex = /** @class */ (function (_super) {
    __extends(CreationsGraphicsTexturesIndex, _super);
    function CreationsGraphicsTexturesIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreationsGraphicsTexturesIndex;
}(route_1.default.extend({
    model: function (params) {
        return this.store.query(paths_1.default.Models.TEXTURE, {
            page: params.page,
        });
    }
})));
exports.default = CreationsGraphicsTexturesIndex;
//# sourceMappingURL=index.js.map