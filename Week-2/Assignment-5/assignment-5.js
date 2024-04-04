function binarySearchPosition(numbers, target) {
    // your code here
    let low = 0;
    let high = numbers.length - 1;
    while (low <= high) {
        let checkMid = low + (high - low) / 2;
        let mid = Math.floor(checkMid);
        if (target < numbers[mid]) {
            high = mid - 1;
        } else if (target > numbers[mid]) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3