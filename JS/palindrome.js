// Write a function in JavaScript that takes a string as input and returns true if the string is a palindrome (i.e. if it reads the same backward as forward), and false otherwise. Ignore spaces, punctuation, and capitalization when determining whether the string is a palindrome. For example, "A man, a plan, a canal: Panama" is a palindrome.

function palindrome(str) {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let revStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
  }
  if (newStr === revStr) {
    return true;
  } else {
    return false;
  }
}

const str = 'A man, a plan, a canal Panama';
console.log(palindrome(str));
