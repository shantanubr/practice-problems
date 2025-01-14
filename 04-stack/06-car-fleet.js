/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]);
    let stack = [];

    for (let [p, s] of pair) {
        // Push the time it takes for the car to reach the target into the stack
        stack.push((target - p) / s);
        if (stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]) {
            // If the car in front will take longer to reach the target, then the car behind will not be able to catch up
            stack.pop();
        }
    }
    return stack.length;

};