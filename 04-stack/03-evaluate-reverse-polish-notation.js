/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let num1 = stack.pop();
            let num2 = stack.pop();
            let result = 0;
            switch (token) {
                case '+':
                    result = num2 + num1;
                    break;
                case '-':
                    result = num2 - num1;
                    break;
                case '*':
                    result = num2 * num1;
                    break;
                case '/':
                    result = Math.trunc(num2 / num1);
                    break;
                default:
                    break;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};