import { helper } from '@ember/component/helper';

export function repeat([start, end]: [number, number]): number[] {
  let numbers: number[] = [];

  for (let i: number = start; i <= end; i++) {
      numbers.push(i);
  }

  return numbers;
}

export default helper(repeat);
