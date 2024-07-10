/*
  13. Swap Toward the Center - 
  Given an array, swap the first and 
  last values, third and third-to-last 
  values, etc.  Example: 
  swapTowardCenter([true,42,"Ada",2,"pizza"]) turns 
  the array into ["pizza", 42, "Ada", 2, true].  
  swapTowardCenter([1,2,3,4,5,6]) turns the array
  into [6,2,4,3,5,1].  No need to return the array this time.
*/

function swapTowardCenter(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left = left + 2;
    right = right - 2;
  }
  console.log(arr);
}

swapTowardCenter([true, 42, "Ada", 2, "pizza"]);
swapTowardCenter([1, 2, 3, 4, 5, 6]);
