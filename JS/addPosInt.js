// Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array. For example, if the input array is [-1, 3, 5, -2, 8], the function should return 16 (3 + 5 + 8).

function addPosInt(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const array = [-1, 3, 5, -2, 8];

console.log(addPosInt(array));
