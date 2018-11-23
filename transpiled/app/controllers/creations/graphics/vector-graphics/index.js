import Controller from '@ember/controller';
import Symbols from "../../../../system/symbols";
import Regex from "../../../../system/regex";
import Paths from "../../../../system/paths";
export default class CreationsGraphicsVectorGraphicsIndex extends Controller.extend({
    queryParams: ['page', 'restart'],
    page: 1,
    actions: {
        filterByTag(query, page) {
            if (query !== Symbols.EMPTY) { // not empty input
                let processedParam = query.split(Regex.COMMA_OR_SPACE); // comma and space
                let filteredParam = processedParam.filter(function (element) {
                    return element.length > 0;
                });
                return this.store
                    .query(Paths.Models.VECTOR_GRAPHIC, { tags: filteredParam, page: page }) // filtering by tags, page and
                    .then((results) => {
                    let meta = results.get('meta');
                    return { meta: meta, query: query, results: results };
                });
            }
            else {
                // the store contains all records loaded from a server
                // and after the results were retrieved, they are returned
                // together with the corresponding query
                return this.store
                    .query(Paths.Models.VECTOR_GRAPHIC, { page: page })
                    .then((results) => {
                    let meta = results.get('meta');
                    return { meta: meta, query: query, results: results };
                }); // show all
            }
        },
        setPage(page) {
            this.set('page', page);
        }
    }
}) {
}
//# sourceMappingURL=index.js.map