/*
  10. Reverse Array - Given an array, 
  write a function that reverses its values, 
  in-place.  Example: reverse([3,1,6,4,2]) 
  returns the same array, but now contains 
  values reversed like so... [2,4,6,1,3].  
  Do this without creating an empty temporary 
  array.  (Hint: you'll need to swap values).
*/

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([3, 1, 6, 4, 2]));
