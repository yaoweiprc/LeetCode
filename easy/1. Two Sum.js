// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target) {
    let map = new Map();
    for (let [index, num] of nums.entries()) {
        let another = target - num;
        if (map.has(another)) {
            return [index, map.get(another)];
        } else {
            map.set(num, index);
        }
    }
    return null;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));