import { helper } from '@ember/component/helper';
import Symbols from "../system/symbols";

export function testSequence([word]: [string]): string[] {
  return word.split(Symbols.EMPTY);
}

export default helper(testSequence);
