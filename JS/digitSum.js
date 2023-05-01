// Write a function called sumDigits that takes an integer as input and returns the sum of its digits.
// For example, sumDigits(123) should return 6 (since 1 + 2 + 3 = 6).

function digitSum(num) {
  let digits = [];
  let sum = 0;
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  return sum;
}

const number = 124;
console.log(digitSum(number));
