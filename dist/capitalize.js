"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize = (str) => {
    let str2 = str;
    let capitalized = false;
    for (let i = 0; i < str2.length; i += 1) {
        if (str2.charCodeAt(i) >= 97 && str2.charCodeAt(i) <= 122 ||
            str2.charCodeAt(i) >= 65 && str2.charCodeAt(i) <= 90) {
            str2 = str2.split("");
            str2.splice(i, 1, str2[i].toUpperCase());
            str2 = str2.join("");
            return str2;
        }
    }
};
exports.default = capitalize;
//# sourceMappingURL=capitalize.js.map