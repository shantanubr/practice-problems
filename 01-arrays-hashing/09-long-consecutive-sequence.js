/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set();
    let longest = 0;

    for(let i=0; i<nums.length; i++) {
        numSet.add(nums[i]);
    }

    for(let n of numSet) {
        if(!numSet.has(n-1)) {
            let l = 0;
            while (numSet.has(n+1)) {
                l += 1;
            }
            longest = Math.max(l, longest);
        } 
    }
    return longest;
};