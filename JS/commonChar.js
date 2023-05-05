// Write a function that takes a string as input and returns the most common character in the string. If there is a tie, return the character that appears first in the string. For example, if the input string is "hello world", the function should return "l".

function CommonChar(str) {
  let count = {};
  let maxFreq = 0;
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  
  return count;
}

const string = 'Hello, World';
console.log(CommonChar(string));
