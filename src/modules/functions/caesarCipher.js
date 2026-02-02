export function caesarCipher(word, shiftFactor) {
    const cipherCodes = [];
    for (const char of word) {
        if (!isAlphabetical(char)) {
            cipherCodes.push(char.charCodeAt());
            continue;
        }

        cipherCodes.push(char.charCodeAt() + shiftFactor);
    }

    return String.fromCharCode(...cipherCodes);
}

function isAlphabetical(char) {
    return /[a-zA-Z]/.test(char);
}

