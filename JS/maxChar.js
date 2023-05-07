//count the maximum occurence of a character and return the count and the character

function charFreqCheck(str) {
  charFreq = {};
  let maxFreq = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (maxFreq < charFreq[char]) {
      maxFreq = charFreq[char];
      maxChar = str[i];
    }
  }
  return { maxFreq, maxChar };
}

const str = 'Hellollo';
console.log(charFreqCheck(str));
