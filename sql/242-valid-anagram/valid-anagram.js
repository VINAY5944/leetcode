/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false; // If lengths differ, they can't be anagrams
    }

    let map = new Map();

    // Count the frequency of each character in string s
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    // Decrease the frequency based on string t
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                map.delete(char); // Remove the character if the count reaches zero
            }
        } else {
            return false; // If t has a character not in s, they can't be anagrams
        }
    }

    // If the map is empty, it means s and t are anagrams
    return map.size === 0;
};
