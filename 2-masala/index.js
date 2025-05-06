let arr=[[1,2,3],[7,1],[1,3],[1]];

let newarr=arr.flat(Infinity);
function oneCount() {
    let count=0;
    
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i]==1) {
            count++;
        }
    }
    if (count==0) {
        return "ZERO";
    }
    else if(count==1){
        return "ONE";
    }
    else if(count==2){
        return "TWO";
    }
    else if(count==3){
        return "THREE";
    }
    else if(count==4){
        return "FOUR";
    }
    else if(count==5){
        return "FIVE";
    }
    else if(count==6){
        return "SIX";
    }
    else if(count==7){
        return "SEVEN";
    }
    else if(count==8){
        return "EIGHT";
    }
    else if(count==9){
        return "NINE";
    }
    else{
        return "NOT FOUND";
    }
}
console.log(oneCount(newarr));