/**
 * Don't use division
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    let pre = 1;
    for(let i=0; i<res.length; i++) {
        res[i] = pre;
        pre = pre * nums[i];
    }
    let post = 1;
    for(let i=res.length-1; i>-1; i--) {
        res[i] = post * res[i];
        post = post * nums[i];
    }
    return res;
};