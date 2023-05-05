// Write a function in JavaScript that takes a string as input and returns true if the string is a palindrome (i.e. if it reads the same backward as forward), and false otherwise. Ignore spaces, punctuation, and capitalization when determining whether the string is a palindrome. For example, "A man, a plan, a canal: Panama" is a palindrome.

function palindrome(str) {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const str = 'A man, a plan, a canal: Panama';
console.log(palindrome(str));
