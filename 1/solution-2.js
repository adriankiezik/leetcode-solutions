/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(target - nums[i])) {
      return [hashmap.get(target - nums[i]), i];
    } else {
      hashmap.set(nums[i], i);
    }
  }
};
