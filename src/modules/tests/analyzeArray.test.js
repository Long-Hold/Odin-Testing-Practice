import { analyzeArray } from "../functions/analyzeArray";

describe('analyzeArray()', () => {
    test.each([
        {
            input: [1,8,3,4,2,6],
            expected: { average: 4, min: 1, max: 8, length: 6 },
            description: 'positive integers',
        },
        {
        input: [5],
        expected: { average: 5, min: 5, max: 5, length: 1 },
        description: 'single element'
        },
        {
        input: [-1, -5, -3],
        expected: { average: -3, min: -5, max: -1, length: 3 },
        description: 'negative numbers'
        },
        {
        input: [1.5, 2.5, 3.5],
        expected: { average: 2.5, min: 1.5, max: 3.5, length: 3 },
        description: 'decimals'
        }
    ])('analyzes an array with $description', ({input, expected}) => {
        expect(analyzeArray(input)).toStrictEqual(expected);
    });
});