function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If no letter is found that is greater than the target, return the first letter
    return letters[left % letters.length];
}
