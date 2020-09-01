let a = 2;
let compara;

function positiveNegative(a){

    if( a % 2){
        compara="positive";
        console.log(compara);
    }
    else if(a == 0){
        compara="zero";
        console.log(compara);
    }
    else{
        compara="negative";
        console.log(compara);
    }
}

positiveNegative(a);