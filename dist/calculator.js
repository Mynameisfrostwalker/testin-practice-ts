"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (num1, num2) { return num1 + num2; };
var subtract = function (num1, num2) { return num1 - num2; };
var multiply = function (num1, num2) { return num1 * num2; };
var divide = function (num1, num2) { return num2 === 0 ? undefined : num1 / num2; };
var calculator = { add: add, subtract: subtract, multiply: multiply, divide: divide };
exports.default = calculator;
//# sourceMappingURL=calculator.js.map