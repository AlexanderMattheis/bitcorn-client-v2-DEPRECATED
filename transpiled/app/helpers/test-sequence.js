import { helper } from '@ember/component/helper';
import Symbols from "../system/symbols";
export function testSequence([word]) {
    return word.split(Symbols.EMPTY);
}
export default helper(testSequence);
//# sourceMappingURL=test-sequence.js.map