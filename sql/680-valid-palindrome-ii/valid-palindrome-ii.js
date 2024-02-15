var validPalindrome = function (s) {
    // Helper function to check if a string is a palindrome
    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // If characters at positions left and right don't match,
            // we try skipping either the left or right character to see if the resulting substring is a palindrome.
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true; // If the string is already a palindrome or can become a palindrome by removing at most one character.
};
