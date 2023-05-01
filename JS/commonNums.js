// Write a function that takes two arrays of numbers as input and returns a new array that contains only the elements that are present in both arrays. For example, if the two input arrays are [1, 2, 3, 4] and [3, 4, 5, 6], the function should return [3, 4].

function arrayUnion(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr1[i]);
      }
    }
  }
  return newArray;
}

const arr1 = [1, 2, 3, 4, 6];
const arr2 = [3, 4, 5, 6, 7];

console.log(arrayUnion(arr1, arr2));
