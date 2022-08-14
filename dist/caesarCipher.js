"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lowerCharacter = function (code, key) {
    var num = code - 97;
    num += key;
    num = num % 26;
    return num + 97;
};
var upperCharacter = function (code, key) {
    var num = code - 65;
    num += key;
    num = num % 26;
    return num + 65;
};
var caesarCipher = function (str, key) {
    return str
        .split("")
        .map(function (char) {
        var num = char.charCodeAt(0);
        if (num >= 97 && num <= 122) {
            return String.fromCharCode(lowerCharacter(num, key));
        }
        else if (num >= 65 && num <= 90) {
            return String.fromCharCode(upperCharacter(num, key));
        }
        return char;
    })
        .join("");
};
exports.default = caesarCipher;
//# sourceMappingURL=caesarCipher.js.map