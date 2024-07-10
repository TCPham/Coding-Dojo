/*
  6. Evens and Odds - Create a function that
  accepts an array.  Every time that array 
  has three odd values in a row, print "That's odd!".  
  Every time the array has three evens in a row, 
  print "Even more so!".
*/

function evenAndOdds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      console.log("That's odd!");
    } else if (
      arr[i] % 2 === 0 &&
      arr[i + 1] % 2 === 0 &&
      arr[i + 2] % 2 === 0
    ) {
      console.log("even more so!");
    }
  }
}
evenAndOdds([1, 2, 4, 6, 3, 3, 5, 7, 8]);
