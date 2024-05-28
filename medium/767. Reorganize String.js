// https://leetcode.com/problems/reorganize-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freqMap = (new Array(26)).fill(0);
    function getCharIdx(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    function getCharFromIdx(idx) {
        return String.fromCharCode('a'.charCodeAt(0) + idx);
    }
    for (let char of s) {
        freqMap[getCharIdx(char)]++;
    }
    const charIdxFreqSortArr = (new Array(26));
    for (let i = 0; i < charIdxFreqSortArr.length; i++) {
        charIdxFreqSortArr[i] = i;
    }
    charIdxFreqSortArr.sort((a, b) => {
        return freqMap[b] - freqMap[a];
    });
    if (freqMap[charIdxFreqSortArr[0]] > Math.ceil(s.length / 2))
        return '';
    const resArr = [];
    let nextPosToFill = 0;
    for (let charIdx of charIdxFreqSortArr) {
        while (freqMap[charIdx] > 0) {
            resArr[nextPosToFill] = getCharFromIdx(charIdx);
            freqMap[charIdx]--;
            nextPosToFill += 2;
            if (nextPosToFill > s.length - 1)
                nextPosToFill = 1;
        }
    }

    return resArr.join('');
};