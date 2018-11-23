import DS from 'ember-data';
export default class Application extends DS.JSONAPIAdapter.extend({
    namespace: "api" // to make request to "/api"
}) {
}
//# sourceMappingURL=application.js.map