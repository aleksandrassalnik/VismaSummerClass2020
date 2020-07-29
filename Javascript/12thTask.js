var ES5Calculator = function (total) {
    this.total = total;
};

ES5Calculator.prototype.add = function (value) {
    this.total += value;
    return this;
}

ES5Calculator.prototype.subtract = function (value) {
    this.total -= value;
    return this;
};

ES5Calculator.prototype.divide = function (value) {
    this.total /= value;
    return this;
};

ES5Calculator.prototype.multiply = function (value) {
    this.total *= value;
    return this;
};

var es5Calc = new ES5Calculator(0);
var es5Amount = es5Calc.add(5).multiply(2).add(20).divide(3).total;
console.log(es5Amount);


//------------------------------------------------------------------------

class ES6Calculator {
    constructor(total) {
        this.total = total;
    }
    add(value) {
        this.total += value;
        return this;
    }
    subtract(value) {
        this.total -= value;
        return this;
    }
    divide(value) {
        this.total /= value;
        return this;
    }
    multiply(value) {
        this.total *= value;
        return this;
    }
}

const es6Calc = new ES6Calculator(0);
const es6Amount = es6Calc.add(5).multiply(2).add(20).divide(3).total;
console.log(es6Amount);
