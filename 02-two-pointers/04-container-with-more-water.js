/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let res = 0;
    while (l < r) {
        let tempArea = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, tempArea);
        if (height[l] < height[r]) {
            l += 1;
        } else {
            r -= 1;
        }
    }
    return res;
};