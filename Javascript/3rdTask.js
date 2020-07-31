function ES5Range(x, y) {
    var array = [];
    for (x; x < y; x++) {
        array.push(x);
    }
    return array;
}

const ES6Range = (x, y) => Array.from({ length: y - x }, (v, i) => x + i);

console.log(ES5Range(1, 5), ES6Range(1, 5));
