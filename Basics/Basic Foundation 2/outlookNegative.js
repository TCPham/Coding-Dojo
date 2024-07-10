/*
  11. Outlook: Negative - Given an 
  array, create and return a new one 
  containing all the values of the 
  original array, but make them all 
  negative (not simply multiplied by -1). 
  Given [1,-3,5], return [-1,-3,-5].
*/

function outlookNegative(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    } else if (arr[i] > 0) {
      newArr.push(arr[i] * -1);
    } else {
      // for 0 value
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(outlookNegative([1, -3, 5]));
