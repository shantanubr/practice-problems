/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for(let n of numSet) {
        if(!numSet.has(n-1)) {
            let l = 1;
            while (numSet.has(n+l)) {
                l += 1;
            }
            longest = Math.max(l, longest);
        } 
    }
    return longest;
};