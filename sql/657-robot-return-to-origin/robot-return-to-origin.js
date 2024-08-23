function judgeCircle(moves) {
    let x = 0;
    let y = 0;

    for (let move of moves) {
        if (move === 'R') {
            x++;
        } else if (move === 'L') {
            x--;
        } else if (move === 'U') {
            y++;
        } else if (move === 'D') {
            y--;
        }
    }

    // The robot returns to the origin if both x and y are 0
    return x === 0 && y === 0;
}
