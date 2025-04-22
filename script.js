function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character that appears only once
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeated character is found
}

// Prompt the user for input
const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
