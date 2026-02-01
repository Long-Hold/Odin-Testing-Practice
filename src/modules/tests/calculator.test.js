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
    describe('subtract()', () => {
        test.each([
            [1, 1, 0],
            [0, 0, 0],
            [1, 2, -1],
            [-1, -3, 2],
        ])('subtracts "%i" - "%i" and returns "%i".', (num1, num2, result) => {
           expect(calculator.subtract(num1, num2)).toEqual(result); 
        });
    });
    describe('divide()', () => {
        test.each([
            [2, 2, 1],
            [3, 2, 1.5],
            [-2, 4, -0.5],
        ])('divides "%i" by "%i" and returns "%f".', (num1, num2, result) => {
            expect(calculator.divide(num1, num2)).toEqual(result);
        });
        test('throws RangeError when num2 is 0', () => {
            expect(() => calculator.divide(1, 0)).toThrow(RangeError);
        })
    })
});