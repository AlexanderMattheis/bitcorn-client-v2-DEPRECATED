import { helper } from '@ember/component/helper';
export function repeat([start, end]) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}
export default helper(repeat);
//# sourceMappingURL=repeat.js.map