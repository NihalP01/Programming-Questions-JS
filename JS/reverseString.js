// Write a function that takes a string as input and returns the reverse of the string. For example, if the input string is "hello", the function should return "olleh".

function reverseString(str) {
  let last = str.length;
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    last--;
    newArr.push(str[last]);
  }
  return newArr.join('');
}

const string = 'Hello';
console.log(reverseString(string));
