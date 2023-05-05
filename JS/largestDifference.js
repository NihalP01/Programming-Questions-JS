// Write a function in JavaScript that takes an array of integers as input and returns the largest difference between any two elements in the array. For example, if the input array is [1, 2, 4, 7], the function should return 6 (the difference between 1 and 7).

function largestDiff(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return maxValue - minValue;
}

const arr = [1, 2, 5, 8, 7];
console.log(largestDiff(arr));
