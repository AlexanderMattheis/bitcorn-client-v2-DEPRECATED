import { helper } from '@ember/component/helper';
export function makeShallowCopy([jsObject]) {
    return jQuery.extend(false, {}, jsObject);
}
export default helper(makeShallowCopy);
//# sourceMappingURL=make-shallow-copy.js.map