/*
    Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
    The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
*/

const lst = [1,2,3,4,5];
function sumAndPrint(lst) {
    sum = 0;
    for (i=0;i<lst.length;i++) {
        sum += lst[i];
        console.log("Num: " + lst[i] + "," + " Sum: " + sum);
    }
}
sumAndPrint(lst);