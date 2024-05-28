// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let i = 0;
    // 前i项最优解的sum
    let sum = nums[0];
    // 前i - 1项最优解的sum
    let oldSum = 0;
    // 注意这里i加1了
    while (++i < nums.length) {
        // 如果要抢第i项，肯定不会抢i - 1项，此时的sum为第i项的值加上前i-2项的最优解
        let newSumIfCurrSelected = oldSum + nums[i];
        // oldSum替换成前i-1项的最优解
        oldSum = sum;
        // 抢第i项获得的钱总数为newSumIfCurrSelected，不抢第i项获得的钱总数就是前i-1项的最优解sum，如果抢第i项能获得更多钱，更新sum
        if (newSumIfCurrSelected > sum) {
            sum = newSumIfCurrSelected;
        }
        // 如果抢第i项不能获得更多钱，就不抢第i项，前i项的最优解仍然是sum不变
    }
    return sum;
};