/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length() - 1;

    while (start < end) {
        while (start < end && !isAlphaNum(s.charAt(start))) {
            start += 1;
        }
        while (start < end && !isAlphaNum(s.charAt(end))) {
            end -= 1;
        } 
        if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) {
            return false;
        } 
        start += 1;
        end -= 1;
    }
    return true;

};

function isAlphaNum (c) {
    return ('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z') || ('0' <= c && c <= '9');
}