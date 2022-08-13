
const capitalize = (str: string) => {
    let str2: string| string[] = str;
    let capitalized = false;
    for (let i = 0; i < str2.length; i += 1) {
        if (str2.charCodeAt(i) >= 97 && str2.charCodeAt(i) <= 122) {
            str2 = str2.split("");
            str2.splice(i, 1, str2[i].toUpperCase());
            str2 = str2.join("");
            return str2;
        }
    }
}

export default capitalize;