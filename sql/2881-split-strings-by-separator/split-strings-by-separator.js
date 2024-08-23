function splitWordsBySeparator(words, separator) {
    let result = [];
    
    for (let word of words) {
        // Split each word by the separator
        let splits = word.split(separator);
        
        // Add non-empty strings to the result
        result.push(...splits.filter(split => split));
    }
    
    return result;
}
