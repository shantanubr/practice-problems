/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i=0; i<temperatures.length; i++) {
        let t = temperatures[i];
        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            const [stackT, stackInd] = stack.pop();
            res[stackInd] = i - stackInd;
        }
        stack.push([t, i]);
    }
    return res;
}; 