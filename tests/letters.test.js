import { test } from 'node:test';
import assert from 'node:assert';

import { letters, palindromeWords } from '../source/letters.js';

test('split "ನನ್ನಂತೆ"', () => {
    assert.deepStrictEqual(letters("ನನ್ನಂತೆ"), ["ನ", "ನ್ನಂ", "ತೆ"]);
});

test('Multi words with space in between', () => {
    assert.deepStrictEqual(letters("ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ"), ["ಎ", "ಲ್ಲ", "ರೊ", "ಳ", "ಗೊಂ", "ದಾ", "ಗು", " ", "ಮಂ", "ಕು", "ತಿ", "ಮ್ಮ"]);
});

test('Palindrome Words', () => {
    assert.deepStrictEqual(
        palindromeWords("ಈ ಪಠ್ಯದಲ್ಲಿ ಪ್ಯಾಲಿಂಡ್ರೋಮ್ ಪದಗಳನ್ನು ಹುಡುಕಿ ತೆಗೆಯುತ್ತದೆ. ನವಜೀವನ ಚಮಚ ಗುಡುಗು ಮಳೆ ಕುಬೇರನಿರಬೇಕು ನವೀನ ಇತ್ಯಾದಿ"),
        ["ನವಜೀವನ", "ಚಮಚ", "ಗುಡುಗು", "ಕುಬೇರನಿರಬೇಕು", "ನವೀನ"]
    );
});
