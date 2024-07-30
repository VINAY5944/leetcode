/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const map = new Map();
    let alphabetIndex = 0; // Track the current position in the alphabet

    for (let i = 0; i < key.length; i++) {
        const char = key[i];
        if (char !== ' ' && !map.has(char)) {
            // Map the character from the key to the current letter in the alphabet
            map.set(char, String.fromCharCode(97 + alphabetIndex));
            alphabetIndex++;
        }
    }

    // Decode the message using the map
    let decodedMessage = '';
    for (const char of message) {
        if (char === ' ') {
            decodedMessage += ' '; // Preserve spaces
        } else {
            decodedMessage += map.get(char) || ''; // Replace character using the map
        }
    }

    return decodedMessage;
};

// Example usage
