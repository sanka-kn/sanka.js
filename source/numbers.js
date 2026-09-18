const englishNumbers = "0123456789";
const kannadaNumbers = "೦೧೨೩೪೫೬೭೮೯";
var englishNumbersMap = {};
var kannadaNumbersMap = {};

for (var i = 0; i < 10; i++) {
    englishNumbersMap[englishNumbers[i]] = kannadaNumbers[i];
    kannadaNumbersMap[kannadaNumbers[i]] = englishNumbers[i];
}

export function toEnglishNumbers(txt) {
    return txt.replace(/([೦-೯])/g, (match) => {
        return kannadaNumbersMap[match];
    });
}

export function toKannadaNumbers(txt) {
    return txt.replace(/([0-9])/g, (match) => {
        return englishNumbersMap[match];
    });
}
