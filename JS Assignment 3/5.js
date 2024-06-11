function correctfn(sentence, wrongWord, correctWord) {
    // Use the replace method with a regular expression to replace all instances of the wrong word
    // The 'g' flag makes sure all instances are replaced
    const correctedSentence = sentence.replace(new RegExp(`\\b${wrongWord}\\b`, 'gi'), correctWord);
    return correctedSentence;
}

// Example usage
let originalSentence = "The quick brown fox jumped over the lazy dogs. The lazy dogs didn't notice the fox.";
let wrongWord = "lazy";
let correctWord = "sleepy";

let newSentence = correctfn(originalSentence, wrongWord, correctWord);

console.log(newSentence);
