/*
  5. Count Positives - Given an array of numbers, 
  create a function to replace the last value with 
  the number of positive values found in the array.  
  Example, countPositives([-1,1,1,1]) changes the 
  original array to [-1,1,1,3] and returns it.
*/

function countPositives(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element > 0) {
      count++;
    }
  });
  arr[arr.length - 1] = count;
  return arr;
}

console.log(countPositives([-1, 1, 1, 1]));
