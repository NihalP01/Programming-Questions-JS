function squareDigits(num) {
  const digits = [];
  while (num > 0) {
    digits.push((num % 10) * (num % 10));
    num = Math.floor(num / 10);
  }
  return digits.reverse().join('');
}

console.log(squareDigits(4321));

// function t(num) {
//   return (numArr = num
//     .toString()
//     .split('')
//     .map((i) => i * i)
//     .join(''));
// }


