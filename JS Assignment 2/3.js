const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax(salary) {
    let taxRate;
    let taxAmount;

    if (salary > 1500000) {
        taxRate = 0.3;
    } else if (salary > 1000000) {
        taxRate = 0.2;
    } else if (salary > 500000) {
        taxRate = 0.1;
    } else {
        taxRate = 0;
    }

    taxAmount = salary * taxRate;

    return taxAmount;
}

rl.question('Enter your salary: ', (salaryInput) => {
    const salary1 = parseFloat(salaryInput);
    const tax1 = findTax(salary1);
    console.log(`Tax amount for a salary of $${salary1}: $${tax1}`);
    rl.close();
});
