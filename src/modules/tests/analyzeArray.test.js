import { analyzeArray } from "../functions/analyzeArray";

describe('analyzeArray()', () => {
    test.each([
        {
            input: [1,8,3,4,2,6],
            expected: { average: 4, min: 1, max: 8, length: 6 },
            description: 'positive integers',
        },
    ])('analyzes an array with $description', ({input, expected}) => {
        expect(analyzeArray(input)).toStrictEqual(expected);
    });
});