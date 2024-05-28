// https://leetcode.com/problems/can-place-flowers/description/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while (n > 0 && i < flowerbed.length) {
        if (
            flowerbed[i] === 0
            && !(i - 1 >= 0 && flowerbed[i - 1] === 1)
            && !(i + 1 < flowerbed.length && flowerbed[i + 1] === 1)
        ) {
            flowerbed[i] = 1;
            n--;
        }
        i++;
    }
    return n === 0;
};