function isValid(str) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char in map) {
            const topElement = stack.length === 0 ? null : stack.pop();
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
