let arr=[1,2,3];
let arr1=[1,2,3,1];
let arr2=[1,2,1];
function sameFirstLast(arr) {
    
    if (arr[0]===arr.at(-1)) {
        return true;
    }
    else{
        return false;
    }
}

function sameFirstLas() {
    
    if (arr1[0]===arr1.at(-1)) {
        return true;
    }
    else{
        return false;
    }
}
function sameFirstLa() {
    
    if (arr2[0]===arr2.at(-1)) {
        return true;
    }
    else{
        return false;
    }
}
console.log(sameFirstLast(arr));
console.log(sameFirstLas(arr1));
console.log(sameFirstLa(arr2));
