import { helper } from '@ember/component/helper';

export function getArrayValue([sequenceB, index]: [string[], number]): string {
  return sequenceB[index];
}

export default helper(getArrayValue);
