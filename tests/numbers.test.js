import { test } from 'node:test';
import assert from 'node:assert';

import { toKannadaNumbers, toEnglishNumbers } from '../source/numbers.js';

test('To Kannada numbers', () => {
    assert.deepStrictEqual(
        toKannadaNumbers("2954 x 6816 = 20134464"),
        "೨೯೫೪ x ೬೮೧೬ = ೨೦೧೩೪೪೬೪"
    );
});

test('To English numbers', () => {
    assert.deepStrictEqual(
        toEnglishNumbers("೨೯೫೪ x ೬೮೧೬ = ೨೦೧೩೪೪೬೪"),
        "2954 x 6816 = 20134464"
    );
});
