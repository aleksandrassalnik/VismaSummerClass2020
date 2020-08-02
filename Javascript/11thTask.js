const array = [10, 6, [4, 8], 3, [6, 5, [9]]];

<<<<<<< HEAD
const ArraySum = (arr) => arr.flat(Infinity).reduce((total, value) => total + value);
=======
function FlattenArray(arr) {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue.concat(Array.isArray(currentValue) ? FlattenArray(currentValue) : currentValue)
    }, [])
}

function ArraySum(arr) {
    const array = FlattenArray(arr);
    let sum = 0;
    array.map(number => {
        sum += number;
    })
    return sum;
}
>>>>>>> goal-3

console.log(ArraySum(array));
