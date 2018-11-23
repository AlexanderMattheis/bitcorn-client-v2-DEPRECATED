import { helper } from '@ember/component/helper';
import Ember from "ember";
import Symbols from '../system/symbols';
export function htmlSafe(params) {
    return Ember.String.htmlSafe(params.join(Symbols.EMPTY));
}
export default helper(htmlSafe);
//# sourceMappingURL=html-safe.js.map