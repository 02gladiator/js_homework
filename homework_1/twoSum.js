function twoSum(arr, target) {
    const Map = new Map();
    let result = [];

    arr.forEach((num, i) => {
        const complement = target - num;
        if (Map.has(complement) && result.length === 0) {
            result = [Map.get(complement), i];
        }
        Map.set(num, i);
    });

    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));