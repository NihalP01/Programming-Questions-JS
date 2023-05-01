// Write a function in JavaScript that takes an array of numbers as input and returns a new array with all the even numbers from the input array.

function evenNum(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

const numbers = [2, 3, 5, 4, 6, 7, 8, 9, 13, 11];
console.log(evenNum(numbers));
