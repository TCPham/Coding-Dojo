/*
  11. Max/Min/Avg - Given an array with 
  multiple values, write a function that 
  returns a new array that only contains 
  the maximum, minimum, and average values 
  of the original array. (e.g. [1,5,10,-2] 
  will return [10,-2,3.5])
*/

function maxMinAvg(arr) {
  let newArr = [];
  let avg;
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = sum / arr.length;

  newArr.push(max, min, avg);

  return newArr;
}
console.log(maxMinAvg([1, 5, 10, -2]));
