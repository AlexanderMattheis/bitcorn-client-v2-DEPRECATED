import Route from '@ember/routing/route';
export default class Index extends Route.extend({
    beforeModel() {
        this.transitionTo('home');
    }
}) {
}
//# sourceMappingURL=index.js.map