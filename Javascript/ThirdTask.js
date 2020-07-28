function ES5Range(x, y) {
    var array = [];
    for (x; x < y; x++) {
        array.push(x);
    }
    return array;
}

const ES6Range = (x, y) => {
    let array = [];
    for (x; x < y; x++) { 
        array = [...array, x];
    }
    return array;
}

console.log(ES5Range(1, 5), ES6Range(1, 5));
