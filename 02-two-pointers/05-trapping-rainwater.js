/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0;

    let l = 0;
    let r = height.length - 1;
    
    let res = 0;

    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    while (l < r) {
        if (maxLeft < maxRight) {
            l += 1;
            maxLeft = Math.max(maxLeft, height[l]); 
            res += maxLeft - height[l];
        } else if (maxLeft > maxRight) {
            r -= 1;
            maxRight = Math.max(maxRight, height[r]);
            res += maxRight - height[r];
        }
    }
    return res;
};