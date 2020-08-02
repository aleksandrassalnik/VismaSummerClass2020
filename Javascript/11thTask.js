const array = [10, 6, [4, 8], 3, [6, 5, [9]]];

const ArraySum = (arr) => arr.flat(Infinity).reduce((total, value) => total + value);

console.log(ArraySum(array));
