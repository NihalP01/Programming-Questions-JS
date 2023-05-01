// Write a function that takes two parameters, a string and a letter, and returns the number of times the letter appears in the string (case-insensitive). For example, if the input string is "Hello, World" and the letter is "o", the function should return 2.

function repeatLetter(str, letter) {
  let count = 0;
  const newString = str.split('');
  for (let i = 0; i < newString.length; i++) {
    if (letter == newString[i]) {
      count++;
    }
  }
  return count;
}

const string = 'Hello, Wolrd';
const letter = 'l';

console.log(repeatLetter(string, letter));
