import { capitalize } from "../functions/capitalize";

describe('capitalize', () => {
    test.each([
        ['toronto', 'Toronto'],
        ['david.', 'David.'],
        ["   i'm over here!", "I'm over here!"],
    ])('capitalizes "%s" to "%s"', (input, expected) => {
        expect(capitalize(input)).toBe(expected);
    });
});