// Write a function in JavaScript that takes a string as input and returns the same string with all the vowels removed.

function noVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newString = [];
  const stringArray = str.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (!vowels.includes(stringArray[i])) {
      newString.push(stringArray[i]);
    }
  }
  return newString.join('');
}

const string = 'Nihal Buragohain';
console.log(noVowel(string));
