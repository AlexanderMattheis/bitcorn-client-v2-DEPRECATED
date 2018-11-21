import jsonVectorGraphics from './fixtures/vector-graphics';
import jsonTextures from './fixtures/textures';

const PER_PAGE = 10;
const NAMESPACE = "/api";

export default function() {
    this.namespace = NAMESPACE;

    overWriteGetRequest(this, "/creations/graphics/vector-graphics", jsonVectorGraphics);
    overWriteGetRequest(this, "/creations/graphics/textures", jsonTextures);

    // access on an id, as data returned is the listing with the id from the made request
    this.get('/creations/graphics/textures/:id', function (database, request) {
        return { data: jsonTextures.find((listing) => request.params.id === listing.id) };
    });

}

function overWriteGetRequest(instance, path, fixtures) {
    instance.get(path, function(database, request) {
        let distributed;
        let metaData;
        let numberOfResults;

        if (request.queryParams.tags != undefined) {  // if the typed in tags are defined
            let filtered = filterResults(request, fixtures);

            // read out
            numberOfResults = filtered.length;
            distributed = distributeToPages(request, filtered);
        } else {
            // read out
            numberOfResults = fixtures.length;
            distributed = distributeToPages(request, fixtures);
        }

        let numberOfPages = Math.ceil(numberOfResults/PER_PAGE);
        metaData = { pages: numberOfPages };

        return { data: distributed, meta: metaData };
    });
}

function filterResults(request, fixtures) {
    let filtered = fixtures.filter(function (element) {
        // iterate over all request tags or substrings and check if all substrings are substrings of one of the tags
        for (let j = 0; j < request.queryParams.tags.length; j++) {
            let requestSubstring = request.queryParams.tags[j];
            let isSubstringOfTag = false;

            // iterate over all element tags and check if a request-substring is a substring of one of the tags
            for (let i = 0; i < element.attributes.tags.length; i++) {
                let tag = element.attributes.tags[i];

                if (tag.toLowerCase().indexOf(requestSubstring.toLowerCase()) !== -1)  // requestSubstring.substringOf(tag)
                    isSubstringOfTag = true;
            }

            // if request-substring not a part of any of the tags
            if (!isSubstringOfTag) {
                return false;
            }
        }

        // if the each request-string was a substring of one of the tags
        return true;
    });

    return filtered;
}

function distributeToPages(request, allotment) {
    let queryParams = request.queryParams;

    let page = 1;
    if (queryParams.page !== undefined)
        page = parseInt(queryParams.page);

    // set start and end
    let start = page * PER_PAGE - PER_PAGE;
    let end = start + PER_PAGE;

    return allotment.slice(start, end);
}
