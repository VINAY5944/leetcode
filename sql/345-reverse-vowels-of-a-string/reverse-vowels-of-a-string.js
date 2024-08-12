var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = s.length - 1;
    let sArray = s.split(''); // Convert the string to an array for mutability

    while (left < right) {
        while (left < right && !vowels.has(sArray[left])) {
            left++;
        }
        while (left < right && !vowels.has(sArray[right])) {
            right--;
        }
        if (left < right) {
            [sArray[left], sArray[right]] = [sArray[right], sArray[left]]; // Swap the vowels
            left++;
            right--;
        }
    }

    return sArray.join(''); // Convert the array back to a string
};
