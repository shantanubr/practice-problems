/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = nums.length;
    for (let i=0; i<nums.length-1; i++) {
        res = res + (i-nums[i]);
    }
    return res;
};