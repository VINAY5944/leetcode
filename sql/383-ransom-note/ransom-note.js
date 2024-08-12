function canConstruct(ransomNote, magazine) {
    // Create a map to count the letters in the magazine
    const letterCount = {};

    // Count the letters in the magazine
    for (let letter of magazine) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Check if ransomNote can be constructed
    for (let letter of ransomNote) {
        if (!letterCount[letter] || letterCount[letter] === 0) {
            return false; // Letter not available or used up
        }
        letterCount[letter]--;
    }

    return true;
}
