import Route from '@ember/routing/route';
import Paths from "../../../../system/paths";
import Regexs from "../../../../system/regex";
import Symbols from "../../../../system/symbols";
export default class CreationsGraphicsTexturesShow extends Route.extend({
    referrerPage: 1,
    model(params) {
        return this.store.findRecord(Paths.Models.TEXTURE, params.texture_id);
    },
    actions: {
        didTransition() {
            //this.set("referrerURL", this.get("router.url").replace("&restart=true", ""));
            // @ts-ignore
            let url = this.get("router.url");
            let page = parseInt(url.replace(Regexs.NON_DIGITS, Symbols.EMPTY));
            if (isNaN(page)) {
                this.set('referrerPage', 1);
            }
            else {
                this.set('referrerPage', page);
            }
        },
        transitionBack() {
            //window.location.href = this.get('referrerURL');
            this.transitionTo("/creations/graphics/textures" + "?page=" + this.get('referrerPage'));
        }
    }
}) {
}
//# sourceMappingURL=show.js.map