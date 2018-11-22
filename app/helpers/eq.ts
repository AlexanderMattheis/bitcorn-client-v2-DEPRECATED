import { helper } from '@ember/component/helper';

export function eq([a, b]: [number, number]): boolean {
  return a === b;
}

export default helper(eq);
