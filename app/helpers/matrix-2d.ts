import { helper } from '@ember/component/helper';

export function matrix2d(): number[][] {
    return [[1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]];
}

export default helper(matrix2d);
