import { helper } from '@ember/component/helper';
import Symbols from "../system/symbols";

export function arrayCreator([word]: [string]): string[] {
    return word.split(Symbols.EMPTY);
}

export default helper(arrayCreator);
