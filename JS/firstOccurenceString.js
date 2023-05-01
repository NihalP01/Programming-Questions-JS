// Write a function in JavaScript that takes a string as input and returns a new string that contains only the first occurrence of each character in the input string, in the order in which they appear. For example, if the input string is "banana", the function should return "ban".

function firstOccurence(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

const string = 'banana';
console.log(firstOccurence(string));
