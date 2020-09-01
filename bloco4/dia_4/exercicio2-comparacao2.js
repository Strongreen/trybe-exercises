let a = 4;
let b = 2;
let compara;

function comparar(a,b){
    if( a > b){
        compara=true;
        return console.log(compara, ' Porque o ',a , ' é maior que o', b);
    }
    else{
        compara=false;
        return console.log(compara, 'Porque o ',a , 'não é maior que o', b);
    }
}
comparar(a,b);