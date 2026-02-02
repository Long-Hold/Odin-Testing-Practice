import { caesarCipher } from "../functions/caesarCipher";

describe('caesarCipher()', () => {
    test.each([
        ['abc', 1, 'bcd'],
        ['xyz', 3, 'abc'],
        ['Hello, World!', 3, 'Khoor, Zruog!'],
    ])('ciphers string "%s" with shift of "%i" to "%s".', (word, shiftFactor, result) => {
        expect(caesarCipher(word, shiftFactor)).toBe(result);
    });
});