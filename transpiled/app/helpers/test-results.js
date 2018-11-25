import { helper } from '@ember/component/helper';
export function testResults() {
    let firstResult = ["AACGT", " ****", "_ACGT"];
    let secondResult = ["AACGT", "* ***", "A_CGT"];
    return [firstResult, secondResult];
}
export default helper(testResults);
//# sourceMappingURL=test-results.js.map