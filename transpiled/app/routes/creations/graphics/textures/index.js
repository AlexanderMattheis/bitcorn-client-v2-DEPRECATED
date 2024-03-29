import Route from '@ember/routing/route';
import Paths from "../../../../system/paths";
export default class CreationsGraphicsTexturesIndex extends Route.extend({
    model(params) {
        return this.store.query(Paths.Models.TEXTURE, {
            page: params.page,
        });
    }
}) {
}
//# sourceMappingURL=index.js.map