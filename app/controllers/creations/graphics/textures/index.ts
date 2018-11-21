import Controller from '@ember/controller';
import Symbols from "../../../../system/symbols";
import Regex from "../../../../system/regex";
import Paths from "../../../../system/paths";

export default class CreationsGraphicsTexturesIndex extends Controller.extend({
    queryParams: ['page', 'restart'],
    page: 1,

    actions: {
        filterByTag(query: string, page: number) {

            if(query !== Symbols.EMPTY) {  // not empty input
                let processedParam = query.split(Regex.COMMA_OR_SPACE);  // comma and space
                let filteredParam = processedParam.filter(function (element) {
                    return element.length > 0;
                });
                return this.store
                    .query(Paths.Models.TEXTURE, { tags: filteredParam, page: page })  // filtering by tags, page and
                    .then((results) => {
                        // @ts-ignore
                        let meta = results.get('meta');
                        return { meta: meta, query: query, results: results }
                    });
            } else {
                // the store contains all records loaded from a server
                // and after the results were retrieved, they are returned
                // together with the corresponding query
                return this.store
                    .query(Paths.Models.TEXTURE, { page: page })
                    .then((results) => {
                        // @ts-ignore
                        let meta = results.get('meta');
                        return { meta: meta, query: query, results: results }
                    });  // show all
            }
        },

        setPage(page: number) {
            this.set('page', page);
        }
    }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'creations/graphics/textures/index': CreationsGraphicsTexturesIndex;
  }
}
