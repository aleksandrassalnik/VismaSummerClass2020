const sumOfNumbers = (x) => {
    return (y) => {
        return x + y;
    }
}

console.log(sumOfNumbers(5)(4));
