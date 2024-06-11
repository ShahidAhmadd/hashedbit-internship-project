function filterGreaterThanFive(inputArr) {
    return inputArr.filter(number => number > 5);
}

// Example usage
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const answer = filterGreaterThanFive(inputArr);

console.log(answer); 
