function getRandomNumber() {
    // Generate a random number between -20 and 20
    return Math.floor(Math.random() * 41) - 20;
}

function displayRandomNumber() {
    const randomNumber = getRandomNumber();
    document.getElementById('num').innerText = randomNumber;

    // Display "Hot" or "Cold" based on the random number
    const hotOrCold = randomNumber < 0 ? "Cold" : "Hot";
    document.getElementById('hotOrCold').innerText = hotOrCold;
}
