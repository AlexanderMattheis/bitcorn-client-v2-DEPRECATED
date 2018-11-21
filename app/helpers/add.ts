import { helper } from '@ember/component/helper';

export function add([a, b]: [number, number]) {
  return a+b;
}

export default helper(add);
