/*
  1. Get 1 to 255 - Write a function that returns an
  array with all the numbers from 1 to 255.
*/

function get1to255() {
  let arr = [];
  for (let i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(get1to255());
