/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map();
    let res = 0;
    let l = 0;
    let maxF = 0;

    for (let r=0; r<s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1);
        maxF = Math.max(maxF, count.get(s[r]));
        while ((r-l+1) - maxF > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l += 1;
        }
        res = Math.max(res, r-l+1);
    }
    return res;
};