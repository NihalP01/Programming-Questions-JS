// Write a function in JavaScript that takes a string as input and returns the number of vowels in the string. For the purposes of this problem, consider the vowels to be "a", "e", "i", "o", and "u", regardless of case. For example, if the input string is "Hello, World!", the function should return 3.

function vowelsCount(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const string = 'Hello, world';
console.log(vowelsCount(string));
