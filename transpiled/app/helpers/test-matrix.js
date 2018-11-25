import { helper } from '@ember/component/helper';
export function testMatrix([height, width]) {
    // init
    let numbers = [];
    for (let i = 0; i < height; i++) {
        numbers[i] = [];
    }
    // fill
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            numbers[i][j] = j + i * width;
        }
    }
    return numbers;
}
export default helper(testMatrix);
//# sourceMappingURL=test-matrix.js.map