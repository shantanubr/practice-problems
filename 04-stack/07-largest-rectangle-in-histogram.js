/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let stack = []; // pair of [index, height]

    for (let i=0; i<heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length-1][1] > heights[i]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }
        stack.push([start, heights[i]]);
    }

    for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
};