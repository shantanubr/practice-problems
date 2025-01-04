/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;
    let b = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = a;
        a = a + b;
        b = temp;
    }
    return a;
};