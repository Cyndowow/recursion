function fibs(n) {
    const array =  [0, 1];
    if(n <= 0) {
        return "Please enter a valid number";
    }
    if(n === 1) {
        return [0];
    }
    if(n === 2) {
        return array;
    }
    for(let i = 2; i < n ; i++) {
        array.push(array[array.length-2] + array[array.length-1])
    }
    return array;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(5));
console.log(fibs(8));