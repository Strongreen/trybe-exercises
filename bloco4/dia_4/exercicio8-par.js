let a = 53;
let b = 7;
let c = 13;

function par(a,b,c){
    if((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0) ){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

par(a,b,c);