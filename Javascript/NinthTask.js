const SevenAte9 = (string) => {
    let newString = string[0];
    for (let i = 1; i < string.length - 1; i++) {
        if (string[i - 1] === '7' && string[i + 1] === '7' && string[i] === '9') { }
        else newString += string[i];
    }
    newString += string[string.length - 1];
    return newString;
}

console.log(SevenAte9('79797'))