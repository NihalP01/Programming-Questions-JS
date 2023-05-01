//find the largest number in the array without sorting

function largest(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

const array = [1, 2, 8, 5, 4, 3];

console.log(largest(array));
