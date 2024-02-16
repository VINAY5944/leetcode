
var backspaceCompare = function(s, t) {
    // Helper function to apply backspaces and return the final string
    function processBackspaces(str) {
        const stack = [];
        
        for (let char of str) {
            if (char === '#') {
                // If a backspace is encountered, pop the last character from the stack
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                // If a regular character is encountered, push it onto the stack
                stack.push(char);
            }
        }
        
        // Convert the stack to a string and return it
        return stack.join('');
    }

    // Process both input strings to get the final strings after backspaces
    const processedS = processBackspaces(s);
    const processedT = processBackspaces(t);

    // Compare the processed strings to determine if they are equal
    return processedS === processedT;
}
