// Write a function that takes an array of strings as input and returns the longest string in the array. If there are multiple strings with the same maximum length, return the first one. For example, if the input array is ["dog", "cat", "bird", "elephant"], the function should return "elephant".

function longestString(arr) {
  let maxLength = 0;
  let longestWord;
  for (let i = 0; i < arr.length; i++) {
    if (maxLength < arr[i].length) {
      maxLength = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

const arr = ['Nihal', 'Automatically', 'Server', 'Help'];

console.log(longestString(arr));
