function romanToInteger(str) {

    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] < map[str[i + 1]] && i + 1 < str.length) {
            result += map[str[i + 1]] - map[str[i]];
            i++;
        } else {
            result += map[str[i]];
        }
    }
    return result;
}

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));