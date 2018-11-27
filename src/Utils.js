function nextLetter(charCode, offset=1, leftLimit, upDown=1) {
    const zeroBased = charCode - leftLimit;
    let newCharCode = (Number(zeroBased) + Number(offset * upDown)) % 26;
    if (newCharCode < 0) { newCharCode += 26; }
    return String.fromCharCode(newCharCode + leftLimit);
}

function getNextSymbol(charSymbol, offset, direction) {
    const charCode = charSymbol.charCodeAt(0);
    switch(true) {
        //A-Z
        case (charCode >= 65 && charCode <= 90): {
            return nextLetter(charCode, offset, 'A'.charCodeAt(0), direction === 'up'?1:-1);
        }
        //a-z
        case (charCode >= 97 && charCode <= 122): {
            return nextLetter(charCode, offset, 'a'.charCodeAt(0), direction === 'up'?1:-1);
        }
        //other charactes
        default: {
            return charSymbol;
        }
    }

}

export default getNextSymbol;