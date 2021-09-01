var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
var doCalcInt = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalcInt('add')(1, 2));
