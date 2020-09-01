let a = 7;
let b = 4;
let c = 3;


function maiorValor(a,b,c){
    if( a > b && a > c){
       return console.log('A é maior porque o ',a , ' é maior que o', b, ' e ', c);
    }
    else if(b > a && b > c){

        return console.log('B é maior porque o ',b , ' é maior que o', a, ' e ', c);
    }
    else{
        return console.log('C é maior porque o ',c , ' é maior que o', a, ' e ', b);
    }
}

maiorValor(a,b,c);