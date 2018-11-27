import { helper } from '@ember/component/helper';
import Symbols from "../system/symbols";
export function arrayCreator([word]) {
    return word.split(Symbols.EMPTY);
}
export default helper(arrayCreator);
//# sourceMappingURL=array-creator.js.map