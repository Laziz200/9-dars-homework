let num1 = 19;
let num2 = 21;
let mx;
let blackjack={};

function blckjack(num1, num2) { 
    let max = Math.max(num1, num2);
    mx = max;
    blackjack.max_number=max;
    return mx;
}

function spl() {
    let arr = [];
    while (mx != 0) {
        let i = mx % 10; 
        arr.unshift(i); 
        mx = Math.floor(mx / 10); 
    }
    for (let i = 0; i < arr.length; i++) {
    
    if (arr[i]==0) {
        arr.push("ZERO");
    }
    else if(arr[i]==1){
        arr.push("ONE");
    }
    else if(arr[i]==2){
        arr.push("TWO");
    }
    else if(arr[i]==3){
        arr.push("THREE");
    }
    else if(arr[i]==4){
        arr.push("FOUR");
    }
    else if(arr[i]==5){
        arr.push("FIVE");
    }
    else if(arr[i]==6){
        arr.push("SIX");
    }
    else if(arr[i]==7){
        arr.push("SEVEN");
    }
    else if(arr[i]==8){
        arr.push("EIGHT");
    }
    else if(arr[i]==9){
        arr.push("NINE");
    }
}
blackjack.arr1=arr;
let len=arr.length;
blackjack.arr_length=len;
return arr;
}
blckjack.type="string";

console.log(blckjack(num1, num2)); 
console.log(spl()); 
console.log(blackjack);
