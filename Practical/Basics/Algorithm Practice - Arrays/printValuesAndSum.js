var testArr = [6, 3, 5, 1, 2, 4];
function printValuesAndSum(testArr) {
  var sum = 0;
  for (let i = 0; i < testArr.length; i++) {
    sum += testArr[i];
    console.log("Num " + testArr[i] + ", " + "Sum " + sum);
  }
}
printValuesAndSum(testArr);
