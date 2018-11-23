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
var regex_1 = require("../../../../system/regex");
var symbols_1 = require("../../../../system/symbols");
var CreationsGraphicsTexturesShow = /** @class */ (function (_super) {
    __extends(CreationsGraphicsTexturesShow, _super);
    function CreationsGraphicsTexturesShow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreationsGraphicsTexturesShow;
}(route_1.default.extend({
    referrerPage: 1,
    model: function (params) {
        return this.store.findRecord(paths_1.default.Models.TEXTURE, params.texture_id);
    },
    actions: {
        didTransition: function () {
            //this.set("referrerURL", this.get("router.url").replace("&restart=true", ""));
            // @ts-ignore
            var url = this.get("router.url");
            var page = parseInt(url.replace(regex_1.default.NON_DIGITS, symbols_1.default.EMPTY));
            if (isNaN(page)) {
                this.set('referrerPage', 1);
            }
            else {
                this.set('referrerPage', page);
            }
        },
        transitionBack: function () {
            //window.location.href = this.get('referrerURL');
            this.transitionTo("/creations/graphics/textures" + "?page=" + this.get('referrerPage'));
        }
    }
})));
exports.default = CreationsGraphicsTexturesShow;
//# sourceMappingURL=show.js.map