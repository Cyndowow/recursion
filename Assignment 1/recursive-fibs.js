const fibsRecursive = (n) => {
    return n <= 0
        ? "Please enter a viable number."
        : n === 1
        ? [0]
        : n === 2
        ? [0, 1]
        : [...fibsRecursive(n - 1), fibsRecursive(n - 1)[n - 2] + fibsRecursive(n - 1)[n - 3]]
}

console.log(fibsRecursive(0));
console.log(fibsRecursive(1));
console.log(fibsRecursive(2));
console.log(fibsRecursive(5));
console.log(fibsRecursive(8));