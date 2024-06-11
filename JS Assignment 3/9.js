function countWords(paragraph) {
      const words = paragraph.trim().split(/\s+/);

   
    return words.length;
}

// Example usage
const paragraph = "This is an example paragraph to count the words.";
const wordCount = countWords(paragraph);

console.log(`The number of words in the paragraph is: ${wordCount}`);
