import { createCalculator } from "../functions/calculator";

describe('createCalculator', () => {
    const calculator = createCalculator();
    describe('.add()', () => {
        test.each([
            [1, 2, 3],
            [4, 2, 6],
            [0, 1, 1],
            [-1, 1, 0],
        ])('adds "%i" + "%i" and returns "%i".', (num1, num2, result) => {
            expect(calculator.add(num1, num2)).toEqual(result);
        });
    });
});