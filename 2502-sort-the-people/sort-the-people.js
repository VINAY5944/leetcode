/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // Combine names and heights into an array of pairs
    let people = names.map((name, index) => [name, heights[index]]);
    
    // Sort the array of pairs based on heights in descending order
    people.sort((a, b) => b[1] - a[1]);
    
    // Extract and return the sorted names
    return people.map(person => person[0]);
};

