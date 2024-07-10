/*
  5. Find max - Given an array with multiple 
  values, write a function that returns 
  the maximum number in the array. 
  (e.g. for [-3,3,5,7] max is 7)
*/

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([-3, 3, 5, 7]));
