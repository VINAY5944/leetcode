function uncommonFromSentences(s1, s2) {
    // Helper function to count words in a sentence
    function countWords(sentence) {
        const counts = {};
        const words = sentence.split(' ');
        words.forEach(word => {
            counts[word] = (counts[word] || 0) + 1;
        });
        return counts;
    }
    
    // Count occurrences of each word in both sentences
    const count1 = countWords(s1);
    const count2 = countWords(s2);
    
    // Find uncommon words
    const uncommonWords = [];
    
    // Check words in s1
    for (const word in count1) {
        if (count1[word] === 1 && !(word in count2)) {
            uncommonWords.push(word);
        }
    }
    
    // Check words in s2
    for (const word in count2) {
        if (count2[word] === 1 && !(word in count1)) {
            uncommonWords.push(word);
        }
    }
    
    return uncommonWords;
}

