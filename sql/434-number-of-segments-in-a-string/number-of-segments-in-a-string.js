var countSegments = function(s) {
    // Split the input string by spaces
    const segments = s.split(' ');
    
    let count = 0;
    // Iterate through the segments and count non-empty ones
    for (const segment of segments) {
        if (segment !== '') {
        count++;
        }
    }
    
    return count;
};