import { test } from 'node:test';
import assert from 'node:assert';

import { letters } from '../source/letters.js';

test('split "ನನ್ನಂತೆ"', () => {
    assert.deepStrictEqual(letters("ನನ್ನಂತೆ"), ["ನ", "ನ್ನಂ", "ತೆ"]);
});

test('Multi words with space in between', () => {
    assert.deepStrictEqual(letters("ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ"), ["ಎ", "ಲ್ಲ", "ರೊ", "ಳ", "ಗೊಂ", "ದಾ", "ಗು", " ", "ಮಂ", "ಕು", "ತಿ", "ಮ್ಮ"]);
});
