/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let output = 0;
    while (n !== 0) {
        if (n % 2 === 1) {
            output = output + 1;
        }
        n = n >> 1;
    }
    return output;
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let output = 0;
    while (n !== 0) {
        n = n & (n-1);
        output = output + 1;
    }
    return output;
};