// https://leetcode.com/problems/implement-trie-prefix-tree/description/

const A_CHAR_CODE = 'a'.charCodeAt(0);

class Trie {
    #pArr = new Array(26);
    #isWord = false;
    insert(word) {
        this.#insert(word, 0);
    }

    #insert(word, idx) {
        if (idx === word.length) {
            this.#isWord = true;
            return;
        }
        const charIdx = word.charCodeAt(idx) - A_CHAR_CODE;
        if (!this.#pArr[charIdx]) {
            this.#pArr[charIdx] = new Trie();
        }
        this.#pArr[charIdx].#insert(word, idx + 1);
    }

    search(word) {
        return this.#search(word, 0);
    }

    #search(word, idx) {
        if (idx === word.length) {
            return this.#isWord;
        }
        const charIdx = word.charCodeAt(idx) - A_CHAR_CODE;
        if (!this.#pArr[charIdx]) {
            return false;
        } else {
            return this.#pArr[charIdx].#search(word, idx + 1);
        }
    }

    startsWith(word) {
        return this.#startsWith(word, 0);
    }

    #startsWith(word, idx) {
        if (idx === word.length) {
            return true;
        }
        const charIdx = word.charCodeAt(idx) - A_CHAR_CODE;
        if (!this.#pArr[charIdx]) {
            return false;
        } else {
            return this.#pArr[charIdx].#startsWith(word, idx + 1);
        }
    }
}