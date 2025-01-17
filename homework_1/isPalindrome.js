function isPalindrome(int) {
    if (int < 0) {
        return false;
    }
    let temp = int.toString();
    return temp === temp.split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));