const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowelsAndConsonants(inputString) {
    const vowels = 'AEIOUaeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-z]/i)) { 
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

rl.question('Please enter a string with at least 20 characters: ', (userInput) => {
    if (userInput && userInput.length >= 20) {
        let result = countVowelsAndConsonants(userInput);
        console.log(`Vowels: ${result.vowels}`);
        console.log(`Consonants: ${result.consonants}`);
    } else {
        console.log("Please enter a valid string with at least 20 characters.");
    }
    rl.close();
});
