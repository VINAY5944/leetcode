var maximum69Number = function(num) {
    let max = num.toString().split('');
    for (let i = 0; i < max.length; i++) {
        if (max[i] === '6') {
            max[i] = '9';
            return parseInt(max.join(''));
        }
    }
    return num; // If no digit 6 found, return the original number
};
