/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let r = 1;

    let sett = new Set();
    let maxLen = 0;

    for (let i=0; i<s.length; i++) {
        while (sett.has(s[i])) {
            sett.delete(s[l]);
            l += 1;
        }
        sett.add(s[i]);
        maxLen = Math.max(maxLen, i - l + 1);
    }
    return maxLen;
};