let arr=[1,0,1,0];
let arr1=[1,4,4,4,4,4,3,2,1,2];
let arr2=[6,7,3,2,1];
function removeDups() {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    let sort=newarr.sort((a,b)=>a-b);
    return sort
}

function removeDups1() {
    let newarr=[];
    for (let i = 0; i < arr1.length; i++) {
        if (!newarr.includes(arr1[i])) {
            newarr.push(arr1[i]);
        }
    }
    let sort=newarr.sort((a,b)=>a-b);
    return sort
}

function removeDups2() {
    let newarr=[];
    for (let i = 0; i < arr2.length; i++) {
        if (!newarr.includes(arr2[i])) {
            newarr.push(arr2[i]);
        }
    }
    let sort=newarr.sort((a,b)=>a-b);
    return sort
}

console.log(removeDups(arr));
console.log(removeDups1(arr1));
console.log(removeDups2(arr2));
