import EmberRouter from '@ember/routing/router';
import config from './config/environment';
const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});
Router.map(function () {
    this.route('home');
    this.route('creations', function () {
        this.route('graphics', function () {
            this.route('textures', function () {
                this.route('show', { path: '/:texture_id' });
            });
            this.route('vector-graphics', function () { });
        });
        this.route('programs', function () {
            this.route('bioinformatics');
            this.route('cross-dating');
            this.route('res');
        });
    });
    this.route('tutorials', function () {
        this.route('design', function () {
            this.route('blender');
            this.route('gimp');
            this.route('inkscape');
        });
        this.route('development', function () {
            this.route('algorithms', function () {
                this.route('needleman-wunsch');
            });
            this.route('data-structures');
            this.route('languages');
        });
    });
    this.route('contact');
    this.route('imprint');
    this.route('privacy');
    this.route('about-authors');
    this.route('about-page');
});
export default Router;
//# sourceMappingURL=router.js.map