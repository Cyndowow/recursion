const mergeSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const merge = (leftArr, rightArr) => {
    const result = [];

    while (leftArr.length > 0 && rightArr.length > 0) {
        const arrayWithMin = leftArr[0] < rightArr[0] ? leftArr : rightArr;
        const mergeElement = arrayWithMin.shift();
        result.push(mergeElement);
    }

    return result.concat(leftArr, rightArr);

}

console.log(mergeSort([]));
console.log(mergeSort([12, 22, 2, 7, 4, 29, 13, 10]));
console.log(mergeSort([123, 452, 985, 555, 477, 326]));