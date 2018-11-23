"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_graphics_1 = require("./fixtures/vector-graphics");
var textures_1 = require("./fixtures/textures");
var PER_PAGE = 10;
var NAMESPACE = "/api";
function default_1() {
    this.namespace = NAMESPACE;
    overWriteGetRequest(this, "/creations/graphics/vector-graphics", vector_graphics_1.default);
    overWriteGetRequest(this, "/creations/graphics/textures", textures_1.default);
    // access on an id, as data returned is the listing with the id from the made request
    this.get('/creations/graphics/textures/:id', function (database, request) {
        return { data: textures_1.default.find(function (listing) { return request.params.id === listing.id; }) };
    });
}
exports.default = default_1;
function overWriteGetRequest(instance, path, fixtures) {
    instance.get(path, function (database, request) {
        var distributed;
        var metaData;
        var numberOfResults;
        if (request.queryParams.tags != undefined) { // if the typed in tags are defined
            var filtered = filterResults(request, fixtures);
            // read out
            numberOfResults = filtered.length;
            distributed = distributeToPages(request, filtered);
        }
        else {
            // read out
            numberOfResults = fixtures.length;
            distributed = distributeToPages(request, fixtures);
        }
        var numberOfPages = Math.ceil(numberOfResults / PER_PAGE);
        metaData = { pages: numberOfPages };
        return { data: distributed, meta: metaData };
    });
}
function filterResults(request, fixtures) {
    var filtered = fixtures.filter(function (element) {
        // iterate over all request tags or substrings and check if all substrings are substrings of one of the tags
        for (var j = 0; j < request.queryParams.tags.length; j++) {
            var requestSubstring = request.queryParams.tags[j];
            var isSubstringOfTag = false;
            // iterate over all element tags and check if a request-substring is a substring of one of the tags
            for (var i = 0; i < element.attributes.tags.length; i++) {
                var tag = element.attributes.tags[i];
                if (tag.toLowerCase().indexOf(requestSubstring.toLowerCase()) !== -1) // requestSubstring.substringOf(tag)
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
    var queryParams = request.queryParams;
    var page = 1;
    if (queryParams.page !== undefined)
        page = parseInt(queryParams.page);
    // set start and end
    var start = page * PER_PAGE - PER_PAGE;
    var end = start + PER_PAGE;
    return allotment.slice(start, end);
}
//# sourceMappingURL=config.js.map