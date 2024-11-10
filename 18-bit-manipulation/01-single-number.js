/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let output = 0;
    for (let num of nums) {
        output = output ^ num;
    }
    return output;
};