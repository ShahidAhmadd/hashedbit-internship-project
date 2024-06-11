const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfDigitProducts(n1, n2) {
    
    let str1 = n1.toString();
    let str2 = n2.toString();

    while (str2.length < str1.length) str2 = '0' + str2;

    let sum = 0;

    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}

function getInputAndCalculate() {
    rl.question('Enter the first number: ', (n1) => {
        rl.question('Enter the second number: ', (n2) => {
            const result = sumOfDigitProducts(parseInt(n1), parseInt(n2));
            console.log(`The sum of the products of the corresponding digits is: ${result}`);
            rl.close();
        });
    });
}

getInputAndCalculate();
