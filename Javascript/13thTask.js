const say = (word) => {
    return (word2) => {
        return word + ' ' + word2;
    }
}

console.log(say(`Hello,`)(`it's me`));