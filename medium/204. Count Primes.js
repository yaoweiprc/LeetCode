// https://leetcode.com/problems/count-primes/description/
// https://leetcode.com/problems/count-primes/solutions/1200796/js-python-java-c-easy-sieve-of-eratosthenes-solution-w-explanation

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const arr = [];
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            let j = i * i;
            while (j < n) {
                arr[j] = true;
                j = j + i;
            }
        }
    }
    return count;
};