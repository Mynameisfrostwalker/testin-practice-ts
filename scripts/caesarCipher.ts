const lowerCharacter = (code: number, key: number) => {
    let num = code - 97;
    num += key;
    num = num % 26;
    return num + 97;
}

const upperCharacter = (code: number, key: number) => {
    let num = code - 65;
    num += key;
    num = num % 26;
    return num + 65;
}

const caesarCipher = (str: string, key: number) => {
    return str
            .split("")
            .map((char) => {
                let num = char.charCodeAt(0);
                if (num >= 97 && num <= 122) {
                    return String.fromCharCode(lowerCharacter(num, key));
                } else if (num >= 65 && num <= 90) {
                    return String.fromCharCode(upperCharacter(num, key));
                }
                return char
            })
            .join("");
};

export default caesarCipher
