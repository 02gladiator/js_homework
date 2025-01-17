function removeDuplicates(arr) {
    if (arr.length <= 1)
        return arr.length;

    let countUniq = 0;

    arr.forEach((element,i) => {
        if(i===0){
            arr[countUniq++] = arr[i];
        }
        else if(element !== arr[i-1]){
            arr[countUniq++] = arr[i++];
        }
    })
    for (let i = countUniq; i < arr.length; i++) {
        arr[i] = "_";
    }

    return countUniq;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

console.log(arr, newSize);