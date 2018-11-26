import Component from '@ember/component';

export default class NumberInput extends Component.extend({
    actions: {
        decrement(minValue: number, inputId: string):void {
            let input = document.getElementById(inputId);
            // @ts-ignore
            let value: number = parseInt(input.value);

            if (isNaN(value)) {
                // @ts-ignore
                input.value = 0;
            } else if (value > minValue) {
                // @ts-ignore
                input.value = value - 1;
            }
        },

        increment(maxValue: number, inputId: string): void {
            let input = document.getElementById(inputId);
            // @ts-ignore
            let value: number = parseInt(input.value);

            if (isNaN(value)) {
                // @ts-ignore
                input.value = 0;
            } else if (value < maxValue) {
                // @ts-ignore
                input.value = value + 1;
            }
        }
    }
}) {
  // normal class body definition here
};
