let arr=[false,false,false,false,false];
let arr1=[false,false,false,true,false];
let arr2=[true,true,true];
function answerCell() {
    for (let i = 0; i < arr.length; i++) {
        let a=arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (a!==arr[j]) {
                return false;
            }
        }
    }
    return true;
}

function answerCell1() {
    for (let i = 0; i < arr1.length; i++) {
        let a=arr1[i];
        for (let j = 0; j < arr1.length; j++) {
            if (a!==arr1[j]) {
                return false;
            }
        }
    }
    return true;
}

function answerCell2() {
    for (let i = 0; i < arr2.length; i++) {
        let a=arr2[i];
        for (let j = 0; j < arr2.length; j++) {
            if (a!==arr2[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(answerCell(arr));
console.log(answerCell1(arr1));
console.log(answerCell2(arr2));

