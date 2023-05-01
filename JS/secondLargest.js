//Write a function that takes an array of numbers as input and returns the second largest number in the array. For example, if the input array is [3, 5, 1, 4, 6, 2], the function should return 5.

function arraySecondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr = [1, 2, 3, 7, 6, 4, 8];

console.log(secondLargest(arr));
