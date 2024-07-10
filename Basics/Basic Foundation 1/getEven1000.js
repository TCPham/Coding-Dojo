/*
  2. Get even 1000 - Write a function that would get the
  sum of all the even numbers from 1 to 1000.
  You may use a modulus operator for this exercise.
 */

function getEven1000() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(getEven1000());
