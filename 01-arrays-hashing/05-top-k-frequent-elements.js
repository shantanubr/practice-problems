/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 0);
        }
        let newCount = map.get(nums[i]);
        map.set(nums[i], newCount + 1);
    }

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let result = [];
    let kk = k;

    for (let [key] of sortedMap) {
        if (kk > 0) {
            result.push(key);
            kk = kk - 1;
        } else break;
    }
    return result;
};

/**
 * Bucket Sort
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let array = Array.from({ length: nums.length + 1}, () => []);
    let mp = {}

    for (let n of nums) {
        mp[n] = (mp[n] || 0) + 1;
    }

    for (const n in mp) {
        array[mp[n]].push(parseInt(n));
    }

    let res = [];

    for (let i=array.length-1; i>-1; i--) {
        for (let n of array[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
};