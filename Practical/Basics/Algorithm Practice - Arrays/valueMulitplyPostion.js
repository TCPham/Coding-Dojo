var testArr = [6, 3, 5, 1, 2, 4];
function valueMultiplyPosition(testArr) {
  for (let i = 0; i < testArr.length; i++) {
    testArr[i] = testArr[i] * i;
  }
  console.log(testArr);
}
valueMultiplyPosition(testArr);
