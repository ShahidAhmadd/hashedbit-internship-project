function reverseString(str) {
    
    let characters = str.split('');

    characters.reverse();

    return characters.join('');
}

// Example usage
const inputString = "Hello";
const reversedString = reverseString(inputString);

console.log(`Original: ${inputString}`);
console.log(`Reversed: ${reversedString}`);
