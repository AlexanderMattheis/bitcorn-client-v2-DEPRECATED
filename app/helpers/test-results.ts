import { helper } from '@ember/component/helper';

export function testResults(): string[][] {
  let firstResult: string[] = ["AACGT", " ****", "_ACGT"];
  let secondResult: string[] = ["AACGT", "* ***", "A_CGT"];

  return [firstResult, secondResult];
}

export default helper(testResults);
