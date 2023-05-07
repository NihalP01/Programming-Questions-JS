// Find the index of First Unique Character in a String. Return -1 if there is not exist any.

function uniqueChar(str) {
  let charFreq = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFreq[char] === 1) {
      return i;
    }
  }
  return -1;
}

const str = 'helloWorldh'
console.log(uniqueChar(str))
