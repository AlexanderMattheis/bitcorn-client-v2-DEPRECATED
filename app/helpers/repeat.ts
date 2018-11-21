import { helper } from '@ember/component/helper';

export function repeat([start, end]: [number, number]) {
  let numbers = [];

  for (let i = start; i <= end; i++) {
      numbers.push(i);
  }

  return numbers;
}

export default helper(repeat);
