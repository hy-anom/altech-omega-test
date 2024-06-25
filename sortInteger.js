function sortNumericAsc(arr) {
    let arrNum = arr;
    let before = 0; 
    let after = 0;
    while (before < arrNum.length) {
        after = before + 1;
        while (after < arrNum.length) {
            if (arrNum[after] < arrNum[before]) {
                let temp = arrNum[before];
                arrNum[before] = arrNum[after];
                arrNum[after] = temp;
            }
            after++;
        }
        before++;
    }

    return arrNum;
}

function sortNumericDesc(arr) {
    let arrNum = arr;
    let before = 0; 
    let after = 0;
    while (before < arrNum.length) {
        after = before + 1;
        while (after < arrNum.length) {
            if (arrNum[after] > arrNum[before]) {
                let temp = arrNum[before];
                arrNum[before] = arrNum[after];
                arrNum[after] = temp;
            }
            after++;
        }
        before++;
    }

    return arrNum;
}

const sample = [10,2,8,7,1,3,4,6,5,9]

console.log('Sorted Array Ascending');
console.log(sortNumericAsc(sample));

console.log('Sorted Array Descending');
console.log(sortNumericDesc(sample));

exports.sortNumericAsc = sortNumericAsc;
exports.sortNumericDesc = sortNumericDesc;