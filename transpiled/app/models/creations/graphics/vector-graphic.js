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
var ember_data_1 = require("ember-data");
var CreationsGraphicsVectorGraphic = /** @class */ (function (_super) {
    __extends(CreationsGraphicsVectorGraphic, _super);
    function CreationsGraphicsVectorGraphic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreationsGraphicsVectorGraphic;
}(ember_data_1.default.Model.extend({
    author: ember_data_1.default.attr('string'),
    date: ember_data_1.default.attr('string'),
    description: ember_data_1.default.attr('string'),
    image: ember_data_1.default.attr('string'),
    licence: ember_data_1.default.attr('string'),
    path: ember_data_1.default.attr('string'),
    tags: ember_data_1.default.attr('array'),
    title: ember_data_1.default.attr('string')
})));
exports.default = CreationsGraphicsVectorGraphic;
//# sourceMappingURL=vector-graphic.js.map