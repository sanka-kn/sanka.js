const uniHalant = "\u0ccd";
const uniNoBreakChars = [
    // ಕಾ[1]   ಕಿ[1]      ಕೀ[1]     ಕು[1]
    "\u0cbe", "\u0cbf", "\u0cc0", "\u0cc1",
    // ಕೂ[1]  ಕೃ[1]      ಕೄ [1]     ಕೆ[1]
    "\u0cc2", "\u0cc3", "\u0cc4", "\u0cc6",
    // ಕೇ[1]   ಕೈ[1]      ಕೊ[1]     ಕೋ[1]
    "\u0cc7", "\u0cc8", "\u0cca", "\u0ccb",
    // ಕೌ[1]   ಕ್[1]     ಕಂ[1]     ಕಃ[1]      ZWJ
    "\u0ccc", "\u0ccd", "\u0c82", "\u0c83", "\u200d"
];

function charHexValue(c) {
    if (c === undefined) return "";

    return c.charCodeAt(0).toString(16);
}

function isKannadaChar(c) {
    var re = new RegExp(/^[\u0C80-\u0CFF\u200D]+$/);
    return c.match(re) ? true : false;
};

export function letters(txt) {
    var l = txt.length;
    var out = [];

    for (var i=0; i<l; i++) {
        var isPrevCharHalant = txt[i - 1] == uniHalant;
        var isNoBreakChar = uniNoBreakChars.indexOf(txt[i]) != -1;

        if (out.length > 0 && isKannadaChar(txt[i]) && (isPrevCharHalant || isNoBreakChar))
            out[out.length - 1] += txt[i];
        else
            out.push(txt[i]);
    }
    return out;
};

export function isPalindrome(word) {
    var l = letters(word);
    if (l.length == 1) return false;

    var reverseWord = l.toReversed().join("");
    return word == reverseWord;
}

export function palindromeWords(txt) {
    var words = txt.split(" ");
    var outWords = [];

    for (var i=0; i<words.length; i++) {
        if (isPalindrome(words[i]))
            outWords.push(words[i]);
    }

    return outWords;
}
