export function capitalize(word) {
    const trimmedWord = word.trim();
    return trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1);
}