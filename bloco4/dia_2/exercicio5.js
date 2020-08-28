let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersBig = 0;
let numbersAux = 0;

for(let i = 0; i < numbers.length ; i++){
    for(let j = 0; j < i; j++){
        if( numbers[i] > numbers[j]){
            numbersAux = numbers[i];
            if(numbersAux > numbersBig){
                numbersBig = numbersAux;
            }  
        }
    }
}

console.log("O maior número é", numbersBig);