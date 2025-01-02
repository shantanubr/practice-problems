/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // only add open if open < n
    // only add a closing if closed < open
    // valid IIF open === closed === n
    let stack = [];
    let res = [];

    function backtrack(openN, closedN) {
        if (openN === n && closedN === n) {
            res.push(stack.join(''));
            return;
        }
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closedN);
            stack.pop();
        }
        if (closedN < openN) {
            stack.push(')');
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }
    backtrack(0,0);
    return res;
};