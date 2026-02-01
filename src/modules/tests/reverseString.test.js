import { reverseString } from "../functions/reverseString";

describe('reverseString()', () => {
    test.each([
        ['Hello', 'olleH'],
        ['   three!   ', '   !eerht   '],
        [' ', ' '],
        ['What is going on? That is crazy.', '.yzarc si tahT ?no gniog si tahW'],
    ])('reverses string "%s" to "%s".', (input, expected) => {
        expect(reverseString(input)).toBe(expected);
    });
});