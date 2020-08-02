const listOfNumbers = [1, 5, 9, 55, 13, 6, 7];

function ES5Sum(listOfNumbers) {
    var sum = 0;
    for (var i = 0; i < listOfNumbers.length; i++)
    {
        sum = sum + listOfNumbers[i];
    }
    return sum;
}

<<<<<<< HEAD
const ES6Sum = (listOfNumbers) => listOfNumbers.reduce((total, value) => total + value);
=======
const ES6Sum = (listOfNumbers) => {
    let sum = 0;
    listOfNumbers.map(number => {
        sum = sum + number;
    })
    return sum;
}
>>>>>>> goal-3

console.log(ES6Sum(listOfNumbers), ES5Sum(listOfNumbers));