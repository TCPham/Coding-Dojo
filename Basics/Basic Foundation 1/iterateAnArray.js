/*
  4. Iterate an array - Write a function that returns 
  the sum of all the values within an array. 
  (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
*/

function iterateAnArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(iterateAnArray([1, 2, 5]));
console.log(iterateAnArray([-5, 2, 5, 12]));
