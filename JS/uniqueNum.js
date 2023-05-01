// Write a function that takes an array of numbers as input and returns a new array that contains only the unique numbers from the input array. For example, if the input array is [1, 2, 2, 3, 3, 3, 4, 5, 5], the function should return [1, 2, 3, 4, 5].

function uniqueNum(arr) {
  let uniqueNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNums.includes(arr[i])) {
      uniqueNums.push(arr[i]);
    }
  }
  return uniqueNums;
}

const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(uniqueNum(numbers));
