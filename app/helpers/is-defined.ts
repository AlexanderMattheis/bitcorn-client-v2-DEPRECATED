import { helper } from '@ember/component/helper';

export function isDefined([anything]: any): boolean {
  return anything !== undefined;
}

export default helper(isDefined);
