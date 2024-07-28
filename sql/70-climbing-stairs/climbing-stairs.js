function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1; // f(1)
    let b = 2; // f(2)
    
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
