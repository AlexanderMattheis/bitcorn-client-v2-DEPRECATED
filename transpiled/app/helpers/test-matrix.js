import { helper } from '@ember/component/helper';
export function testMatrix([width, height]) {
    let numbers = [];
    for (let i = 0; i < height; i++) {
        numbers[i] = [];
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            numbers[i][j] = j + i * width;
        }
    }
    return numbers;
}
export default helper(testMatrix);
//# sourceMappingURL=test-matrix.js.map