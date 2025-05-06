let arr=[1,0,1,0];
let arr1=["The","big","cat"];
let arr2=["John","Taylor","John"];
function removeDups() {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr
}

function removeDups1() {
    let newarr=[];
    for (let i = 0; i < arr1.length; i++) {
        if (!newarr.includes(arr1[i])) {
            newarr.push(arr1[i]);
        }
    }
    return newarr
}

function removeDups2() {
    let newarr=[];
    for (let i = 0; i < arr2.length; i++) {
        if (!newarr.includes(arr2[i])) {
            newarr.push(arr2[i]);
        }
    }
    return newarr
}

console.log(removeDups(arr));
console.log(removeDups1(arr1));
console.log(removeDups2(arr2));
