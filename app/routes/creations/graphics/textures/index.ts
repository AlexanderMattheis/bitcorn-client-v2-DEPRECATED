import Route from '@ember/routing/route';
import Paths from "../../../../system/paths";

export default class CreationsGraphicsTexturesIndex extends Route.extend({
    model(params: any): object {
        return this.store.query(Paths.Models.TEXTURE, {
            page: params.page,
        });
    }
}) {
  // normal class body definition here
}
