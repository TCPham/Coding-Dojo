/*
  12. Always Hungry - Create a function 
  that accepts an array, and prints "yummy" each 
  time one of the values is equal to "food".  If 
  no array values are "food", then print "I'm hungry" once.
*/

function alwaysHungry(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
    } else {
      count++;
    }
  }
  if (count === arr.length) {
    console.log("I'm hungry");
  }
}
alwaysHungry(["food", "money", "food", "power"]);
alwaysHungry(["money", "power", "respect"]);
