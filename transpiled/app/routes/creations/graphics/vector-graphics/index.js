import Route from '@ember/routing/route';
import Paths from '../../../../system/paths';
export default class CreationsGraphicsVectorGraphicsIndex extends Route.extend({
    model(params) {
        return this.store.query(Paths.Models.VECTOR_GRAPHIC, {
            page: params.page,
        });
    }
}) {
}
//# sourceMappingURL=index.js.map