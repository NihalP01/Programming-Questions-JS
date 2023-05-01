function fizzFuzz() {
  let numbers = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      numbers += ' fizzFuzz ';
    } else if (i % 3 == 0) {
      numbers += ' fizz ';
    } else if (i % 5 == 0) {
      numbers += ' fuzz ';
    } else {
      numbers += ` ${i}`;
    }
  }
  return numbers;
}

console.log(fizzFuzz());
