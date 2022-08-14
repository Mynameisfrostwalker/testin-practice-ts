"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analyzeArray = function (arr) {
    if (arr.length === 0) {
        return null;
    }
    var sortedArr = arr.sort(function (a, b) { return a - b; });
    var average = sortedArr.reduce(function (acc, curr) { return acc + curr; }, 0) / sortedArr.length;
    return {
        average: average,
        min: sortedArr[0],
        max: sortedArr[sortedArr.length - 1],
        length: sortedArr.length
    };
};
exports.default = analyzeArray;
//# sourceMappingURL=analyzeArray.js.map