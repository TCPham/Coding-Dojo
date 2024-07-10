/*
  2. Print Low, Return High - Create a function
   that takes in an array of numbers.  The function
    should print the lowest value in the array, and 
    return the highest value in the array.
*/

function printLowReturnHigh(arr) {
  let low = arr[0];
  let high = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    } else if (arr[i] < low) {
      low = arr[i];
    }
  }
  console.log(low);
  return high;
}

printLowReturnHigh([1, 2, 3, 4, 5]);
console.log(printLowReturnHigh([1, 2, 3, 4, 5]));
