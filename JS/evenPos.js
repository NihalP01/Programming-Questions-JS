// Write a function that takes an array of numbers as input and returns a new array that contains only the numbers that are greater than zero and even. For example, if the input array is [1, 2, -3, 4, 0, 7, 8], the function should return [2, 4, 8].

function evenPos(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, -3, -4, 0, 7, -8, 6, 10];

console.log(evenPos(array));
