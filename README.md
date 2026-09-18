# sanka.js - Kannada Utilities

## Split the text into letters

Split the text into letters specific to Kannada language.

```js
letters(txt);
```

Example:

```js
letters("ನನ್ನಂತೆ"); // Returns ["ನ", "ನ್ನಂ", "ತೆ"]
```

## Check if the given text/word is Palindrome

```js
isPalindrome(txt);
```

Example:

```js
isPalindrome("ಕುಬೇರನಿರಬೇಕು"); // Returns true
```

## List all Palindrome words from the given text

```js
palindromeWords(txt);
```

Example:

```js
palindromeWords("ಈ ಪಠ್ಯದಲ್ಲಿ ಪ್ಯಾಲಿಂಡ್ರೋಮ್ ಪದಗಳನ್ನು ಹುಡುಕಿ ತೆಗೆಯುತ್ತದೆ. ನವಜೀವನ ಚಮಚ ಗುಡುಗು ಮಳೆ ಕುಬೇರನಿರಬೇಕು ನವೀನ ಇತ್ಯಾದಿ");
// Returns ["ನವಜೀವನ", "ಚಮಚ", "ಗುಡುಗು", "ಕುಬೇರನಿರಬೇಕು", "ನವೀನ"]
```

## N Letter words

Splits each word into Kannada letters and finds the words matching the number of letters.

```js
nLetterWords(txt, n);
```

Example:

```js
nLetterWords("ಈ ಪಠ್ಯದಲ್ಲಿ ಪ್ಯಾಲಿಂಡ್ರೋಮ್ ಪದಗಳನ್ನು ಹುಡುಕಿ ತೆಗೆಯುತ್ತದೆ. ನವಜೀವನ ಚಮಚ ಗುಡುಗು ಮಳೆ ಕುಬೇರನಿರಬೇಕು ನವೀನ ಇತ್ಯಾದಿ", 3);
// Returns ["ಹುಡುಕಿ", "ಚಮಚ", "ಗುಡುಗು", "ನವೀನ", "ಇತ್ಯಾದಿ"]
```

## Convert number formats

```js
toKannadaNumbers(txt);
toEnglishNumbers(txt);
```

Examples:

```js
toKannadaNumbers("2954 x 6816 = 20134464");
// Returns "೨೯೫೪ x ೬೮೧೬ = ೨೦೧೩೪೪೬೪"
```

```js
toEnglishNumbers("೨೯೫೪ x ೬೮೧೬ = ೨೦೧೩೪೪೬೪");
// Returns "2954 x 6816 = 20134464"
```

## Shuffle

Shuffle the given text based on [Fisher Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

```js
shuffle(txt);
shuffle(txt, withinWord);
```

```js
shuffle("ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ");
// Returned "ಎಮ್ಮಳದಾಕುಲ್ಲರೊ ತಿಗುಗೊಂಮಂ"
```

```js
//      txt                     withinWord
shuffle("ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ", true);
// Returned "ಳಎಲ್ಲದಾಗುರೊಗೊಂ ತಿಮಂಕುಮ್ಮ"
```
