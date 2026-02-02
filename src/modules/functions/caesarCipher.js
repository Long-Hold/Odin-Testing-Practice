export function caesarCipher(word, shiftFactor) {
    const cipherCodes = [];
    for (const char of word) {
        if (!isAlphabetical(char)) {
            cipherCodes.push(char.charCodeAt());
            continue;
        }

        if (surpassesAlphabeticalChardCode(char, shiftFactor)) {
            const wrappedCharCode = wrapCharCode(char, shiftFactor);
            cipherCodes.push(wrappedCharCode);
            continue;
        }

        cipherCodes.push(char.charCodeAt() + shiftFactor);
    }

    return String.fromCharCode(...cipherCodes);
}

function isAlphabetical(char) {
    return /[a-zA-Z]/.test(char);
}

function surpassesAlphabeticalChardCode(char, shiftFactor) {
    if (char === char.toLowerCase()) return (char.charCodeAt() + shiftFactor) > 'z'.charCodeAt();
    
    else return (char.charCodeAt() + shiftFactor) > 'Z'.charCodeAt();
}


function wrapCharCode(char, shiftFactor) {
    const baseCode = (char === char.toLowerCase()) ? 'a'.charCodeAt() : 'A'.charCodeAt();

    // The offSet value represents the char's numerical position in the alphabet out of 26.
    const offSet = char.charCodeAt() - baseCode;

    // The shiftedOffset represents the char's new position after being shifted. 
    // If char = 'x' and shift = '3', this calculation returns '0', which basically means
    // "Go 0 letters past 'a' after wrapping."
    const shiftedOffset = (offSet + shiftFactor) % 26;

    //convert back to js ASCII
    return baseCode + shiftedOffset;
}