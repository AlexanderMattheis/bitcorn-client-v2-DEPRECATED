import { helper } from '@ember/component/helper';

export function geq([a, b]: [number, number]) {
  return a >= b;
}

export default helper(geq);
