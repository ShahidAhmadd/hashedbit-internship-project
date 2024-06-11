function findDigitalRoot(num) {
    while (num >= 10) {
        num = sumOfDigits(num);
    }
    return num;
}

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; 
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage
const number = 45;
const digitalRoot = findDigitalRoot(number);
console.log(`The digital root of ${number} is ${digitalRoot}`);
