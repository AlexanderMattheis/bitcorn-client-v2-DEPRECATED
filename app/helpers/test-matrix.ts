import { helper } from '@ember/component/helper';

export function testMatrix([height, width]: [number, number]): number[][] {
    // init
    let numbers: number[][] = [];

    for (let i: number = 0; i < height; i++) {
        numbers[i] = [];
    }

    // fill
    for(let i: number = 0; i < height; i++) {
        for(let j: number = 0; j < width; j++) {
            numbers[i][j] = j + i * width;
        }
    }

    return numbers;
}

export default helper(testMatrix);
