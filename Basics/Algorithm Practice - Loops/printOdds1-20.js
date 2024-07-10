/*
    Print out all odd numbers from 1 to 20
    The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
*/

const lst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newLst = [];
function printOdds(lst) {
    for (i=0;i<lst.length;i++) {
        if (lst[i] % 2 != 0) {
            newLst.push(lst[i]);
        }
    }
    console.log(newLst);
}
printOdds(lst);